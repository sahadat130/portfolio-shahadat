import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  categories = ['All', 'Backend', 'Frontend', 'Database', 'Tools'];
  activeCategory = 'All';

  skills: Skill[] = [
    { name: 'C#', icon: 'fab fa-microsoft', level: 95, category: 'Backend' },
    { name: 'ASP.NET Core', icon: 'fas fa-server', level: 90, category: 'Backend' },
    { name: 'ASP.NET Web API', icon: 'fas fa-plug', level: 90, category: 'Backend' },
    { name: 'Entity Framework', icon: 'fas fa-database', level: 85, category: 'Backend' },
    { name: 'Angular', icon: 'fab fa-angular', level: 80, category: 'Frontend' },
    { name: 'TypeScript', icon: 'fab fa-js-square', level: 75, category: 'Frontend' },
    { name: 'HTML/CSS', icon: 'fab fa-html5', level: 85, category: 'Frontend' },
    { name: 'MS SQL Server', icon: 'fas fa-database', level: 90, category: 'Database' },
    { name: 'Git', icon: 'fab fa-git-alt', level: 85, category: 'Tools' },
    { name: 'REST API', icon: 'fas fa-code', level: 90, category: 'Backend' },
    { name: 'Jira', icon: 'fab fa-jira', level: 80, category: 'Tools' },
    { name: 'Crystal Report', icon: 'fas fa-file-alt', level: 85, category: 'Tools' }
  ];

  filteredSkills = [...this.skills];

  otherSkills = [
    'SOLID Principles',
    'Domain-Driven Design (DDD)',
    'CQRS',
    'Microservices',
    'SDLC',
    'LINQ',
    'JWT Authentication',
    'Refresh Token',
    'Bkash API Integration',
    'SSLCommerz Integration',
    'Code Review',
    'Agile/Scrum',
    'Bitbucket'
  ];

  filterSkills(category: string) {
    this.activeCategory = category;
    if (category === 'All') {
      this.filteredSkills = [...this.skills];
    } else {
      this.filteredSkills = this.skills.filter(skill => skill.category === category);
    }
  }
}
