import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  client: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Hospital Management System',
      client: 'Bancharampur Upazila Health Complex',
      description: 'A comprehensive hospital management solution for managing indoor/outdoor patients, diagnostics, pharmacy, and prescriptions.',
      technologies: ['Angular 12', 'ASP.Net 7', 'Crystal Report', 'MSSQL 2019'],
      features: ['Indoor', 'Outdoor', 'Diagnostic', 'Pharmacy', 'Prescription'],
      icon: 'fas fa-hospital'
    },
    {
      title: 'Personal Identity Management System',
      client: 'Bangladesh Navy',
      description: 'A secure identity management system for managing personnel information with API integration capabilities.',
      technologies: ['Visual Studio 2015', 'C#', 'AngularJS', 'SQL Server 2019', 'Crystal Report'],
      features: ['Archive', 'Officer Management', 'Sailors', 'Civil Information', 'API Integration'],
      icon: 'fas fa-id-card'
    },
    {
      title: 'Items Information & Monitoring',
      client: 'Bangladesh Navy',
      description: 'An inventory tracking and monitoring software for managing items and assets effectively.',
      technologies: ['Visual Studio 2015', 'C#', 'AngularJS', 'SQL Server 2019', 'Crystal Report'],
      features: ['Inventory Tracking', 'Item Management', 'Monitoring', 'Reporting'],
      icon: 'fas fa-boxes'
    },
    {
      title: 'Inventory Management Software',
      client: 'Sharif Traders',
      description: 'Complete inventory and accounting solution for managing purchases, sales, production, and warehouse operations.',
      technologies: ['Visual Studio 2015', 'C#', 'AngularJS', 'SQL Server 2008 R2', 'Crystal Report'],
      features: ['Purchase', 'Sales', 'Inventory', 'Accounts', 'Production', 'Warehouse'],
      icon: 'fas fa-warehouse'
    },
    {
      title: 'Union Management System',
      client: 'Fulbaria Upazila, Srinagar Upazilla',
      description: 'A local government management system for handling taxes, licenses, certificates, and project management.',
      technologies: ['AngularJS', 'ASP.Net 4.5', 'Crystal Report', 'HTML Report', 'MSSQL 2019'],
      features: ['Holding Tax', 'Trade License', 'Certificate Management', 'Project Management'],
      icon: 'fas fa-landmark'
    },
    {
      title: 'Budget & Accounts',
      client: 'Bandarban Zilla Parishad',
      description: 'A comprehensive budgeting and accounting solution with payroll management capabilities.',
      technologies: ['AngularJS', 'ASP.Net 4.5', 'Crystal Report', 'HTML Report', 'MSSQL 2019'],
      features: ['Budget Management', 'Accounts', 'Payroll', 'Financial Reporting'],
      icon: 'fas fa-calculator'
    }
  ];
}
