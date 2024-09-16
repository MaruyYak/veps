import { Component } from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrl = '/assets/leaflet/marker-icon-2x.png';
const iconUrl = '/assets/leaflet/marker-icon.png';
const shadowUrl = '/assets/leaflet/marker-shadow.png';

const defaultIcon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  workSchedule = [
    { day: 'Понедельник', hours: '8:00 - 17:00' },
    { day: 'Вторник', hours: '8:00 - 17:00' },
    { day: 'Среда', hours: '8:00 - 17:00' },
    { day: 'Четверг', hours: '8:00 - 17:00' },
    { day: 'Пятница', hours: '8:00 - 17:00' },
    { day: 'Суббота', hours: 'Выходной' },
    { day: 'Воскресенье', hours: 'Выходной' }
  ];

  ngAfterViewInit(): void {
    const map = L.map('map').setView([52.461357, 30.994267], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([52.461357, 30.994267]).addTo(map)
      .bindPopup('Мы находимся тут')
      .openPopup();
  }
}
