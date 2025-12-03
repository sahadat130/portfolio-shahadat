import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  icon: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations: Education[] = [
    {
      degree: 'Master of Science',
      field: 'Computer Science and Engineering',
      institution: 'Bangladesh Institute of Science & Technology',
      location: 'Dhaka, Bangladesh',
      period: 'May 2020 – February 2022',
      cgpa: '3.50 out of 4',
      icon: 'fas fa-graduation-cap'
    },
    {
      degree: 'Bachelor of Science',
      field: 'Computer Science and Engineering',
      institution: 'Bangladesh Institute of Science & Technology',
      location: 'Dhaka, Bangladesh',
      period: 'April 2015 – December 2019',
      cgpa: '3.01 out of 4',
      icon: 'fas fa-user-graduate'
    }
  ];
}
