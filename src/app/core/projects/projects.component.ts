import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-projects',
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
      description: 'An HR-tool build with Java, Angular, Snowflake and Python.',
      link: 'https://example.com/project1'
    },
    {
      title: 'Internship - Fenego',
      description: 'An Angular PWA developed for sick children.',
      link: 'https://example.com/project2'
    }
  ];

}
