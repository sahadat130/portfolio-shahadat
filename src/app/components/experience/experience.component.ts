import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'BRAC Saajan Exchange Ltd',
      position: 'Software Engineer',
      location: 'Dhaka, Bangladesh',
      period: 'November 2024 - Present',
      current: true,
      description: [
        'Collaborate with the development team to design, develop, and maintain ERP software applications according to specifications.',
        'Continuously learn new technologies, tools, and programming languages to enhance skills and contributions to projects.',
        'Troubleshoot bugs and implement optimizations to improve the performance and functionality of the application by about 25–30%.'
      ]
    },
    {
      company: 'Deshi Systems Limited',
      position: 'Software Engineer',
      location: 'Dhaka, Bangladesh',
      period: 'February 2022 – November 2024',
      description: [
        'Designed, developed, and maintained backend web Api integrated with web and mobile applications using .NET Core and C#.',
        'Troubleshoot bugs and implement optimizations to improve the performance and functionality of the application.',
        'Collaborated with cross-functional teams and clients to gather requirements, translate them into technical specifications, and deliver high-quality software solutions.',
        'Documented and maintained software codebase, and managed the software development lifecycle, including routine maintenance and updates.',
        'Designed and optimized SQL stored procedures, functions, and triggers to ensure efficient database operations.'
      ]
    },
    {
      company: 'Deshi Systems Limited',
      position: 'Jr. Software Engineer',
      location: 'Dhaka, Bangladesh',
      period: 'March 2019 – January 2022',
      description: [
        'Collaborate with the development team to design, develop, and maintain software applications according to specifications.',
        'Continuously learn new technologies, tools, and programming languages to enhance skills and contributions to projects.',
        'Troubleshoot bugs and implement optimizations to improve the performance and functionality of the application by about 25–30%.'
      ]
    }
  ];
}
