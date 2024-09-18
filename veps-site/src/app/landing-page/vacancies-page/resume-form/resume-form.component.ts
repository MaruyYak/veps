import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../shared/services/modal-service/modalService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrl: './resume-form.component.scss'
})
export class ResumeFormComponent {
  resumeForm: FormGroup;
  isModalOpen: boolean = false;
  vacancyLink: string | null = null;
  private modalSubscription!: Subscription;
  
  constructor( 
    private modalService: ModalService,
    private fb: FormBuilder) {
    this.resumeForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(3)],
      phone: ['', Validators.required, Validators.minLength(7)],
      email: ['', [Validators.required, Validators.email]],
      resume: [null, Validators.required, Validators.minLength(1)]
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
  }

  onSubmit() {
    if (this.resumeForm.valid) {
      console.log(this.resumeForm.value);
      this.closeModal();
      this.resetForm();
    }
  }


  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.resumeForm.patchValue({
        resume: file
      });
    }
  }
}
