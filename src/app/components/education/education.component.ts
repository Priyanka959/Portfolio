import { Component } from '@angular/core';

interface Education {
  degree: string;
  institution: string;
  year: string;
  achievements: string[];
}

@Component({
  selector: 'app-education',
  template: `
    <section class="education-section py-5">
      <div class="container">
        <h2 class="text-center mb-5" data-aos="fade-up">Education</h2>
        <div class="timeline">
          <div class="timeline-item" *ngFor="let edu of education" data-aos="fade-up">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">{{ edu.degree }}</h3>
                <h4 class="h6 text-muted">{{ edu.institution }}</h4>
                <p class="text-muted">{{ edu.year }}</p>
                <ul class="list-unstyled">
                  <li class="mb-2" *ngFor="let achievement of edu.achievements">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }
    .timeline-item {
      margin-bottom: 2rem;
      position: relative;
      padding-left: 2rem;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2px;
      background: #dee2e6;
    }
    .timeline-item::after {
      content: '';
      position: absolute;
      left: -6px;
      top: 0;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #007bff;
    }
    .card {
      border: none;
      box-shadow: 0 0 15px rgba(0,0,0,.1);
    }
  `]
})
export class EducationComponent {
  education: Education[] = [
    {
      degree: 'Master of Computer Applications',
      institution: 'NMAM Institute of Technology',
      year: '2024-present',
      achievements: [
        'Current CGPA: 8.6',
        'Specializing in Full Stack Development and Machine Learning',
        'Working on advanced projects in AI and web development',
        'Active participant in technical workshops and seminars'
      ]
    },
    {
      degree: 'Bachelor of Science',
      institution: 'Govinda Dasa College, Surathkal',
      year: '2021-2024',
      achievements: [
        'Outstanding CGPA: 9.43',
        'Strong foundation in computer science fundamentals',
        'Participated in various technical competitions',
        'Excellent academic performance throughout the program'
      ]
    }
  ];
}