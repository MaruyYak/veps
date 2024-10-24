import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../shared/services/modal/modalService';
import { Subscription } from 'rxjs';
import { ValidationService } from '../../../shared/services/validation/ValidationService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrl: './resume-form.component.scss'
})
export class ResumeFormComponent {
  resumeForm: FormGroup;
  isModalOpen: boolean = false;
  vacancyLink: string | null = null;
  maxSizeInMB = 5;
  fileError: string | null = null;
  private modalSubscription!: Subscription;
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor( 
    private modalService: ModalService,
    private fb: FormBuilder,
    private validationService: ValidationService,
    private http: HttpClient) {

      this.resumeForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        phone: ['', [Validators.required, this.validationService.phoneValidator()]],
        email: ['', [Validators.required, this.validationService.emailValidator()]],
        resume: [null, Validators.required]
      });
  }


  ngOnInit() {
    this.modalSubscription = this.modalService.modalState$.subscribe(state => {
      this.isModalOpen = state;
    });
  }
  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
  }

  closeModal() {
    this.modalService.closeModal();
  }

  resetForm() {
    this.resumeForm.reset();
    this.fileInput.nativeElement.value = '';
  }

  // onSubmit() {
  //   if (!this.resumeForm.invalid) {
  //     console.log(this.resumeForm.value);
  //     setTimeout(() => {
  //       this.closeModal();
  //       this.resetForm();
  //     }, 2000);
  //   }
  // }

  onSubmit() {
    if (!this.resumeForm.invalid) {
      this.http.post('https://veps.by/mail', this.resumeForm.value, {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe(
        (response) => {
          console.log('Email sent successfully');
        },
        (error) => {
          console.error('Error sending email', error);
        }
      );
        
    }
  }

  onFileSelect(event: Event) {
   const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0] as File;
  
    const validFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    this.fileError = null; 

    if (file) {
      if (!validFileTypes.includes(file.type)) {
        this.fileError = 'Допускаются только файлы формата PDF, DOC или DOCX-';
        this.fileInput.nativeElement.value = '';
        return;
      }
    
      if (file.size > this.maxSizeInMB * 1024 * 1024) {
        this.fileError = 'Файл должно быть не более 5 МБ';
        this.fileInput.nativeElement.value = '';
        return;
      }
    
      this.resumeForm.patchValue({ resume: file });
    }
  }
}
