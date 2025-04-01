import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'IT-project - DataSense',
      description: 'An HR-tool build with Java, Angular, Snowflake, Python.',
      link: 'https://example.com/project1'
    },
    {
      title: 'Internship - Fenego',
      description: 'An Angular PWA for sick children.',
      link: 'https://example.com/project2'
    }
  ];

}
