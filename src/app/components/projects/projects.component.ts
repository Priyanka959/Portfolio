import { Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  template: `
    <section class="projects-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5" data-aos="fade-up">
          <span class="section-subtitle">My Work</span>
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-description">
            A collection of my recent work in web development and software engineering.
          </p>
        </div>
        
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let project of projects; let i = index" 
               [attr.data-aos]="i % 2 === 0 ? 'fade-right' : 'fade-left'"
               [attr.data-aos-delay]="i * 100">
            <div class="project-card">
              <div class="project-image">
                <img [src]="project.image" [alt]="project.name">
                <div class="project-overlay">
                  <div class="project-links">
                    <a [href]="project.github" class="project-link" target="_blank" title="View Code">
                      <i class="bi bi-github"></i>
                    </a>
                    <a [href]="project.demo" class="project-link" target="_blank" title="Live Demo">
                      <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-content">
                <h3 class="project-title">{{ project.name }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-tech">
                  <span class="tech-tag" *ngFor="let tech of project.technologies">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5" data-aos="fade-up">
          <a href="https://github.com/Priyanka959" class="btn btn-outline-primary btn-lg">
            <i class="bi bi-github me-2"></i>View More on GitHub
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      background-color: #f8f9fa;
    }

    .section-subtitle {
      color: #007bff;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.9rem;
      display: block;
      margin-bottom: 1rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #212529;
    }

    .section-description {
      color: #6c757d;
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto;
    }

    .project-card {
      background: #fff;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }
    
    .section-header {
      margin-bottom: 3rem;
      position: relative;
    }

    .section-header::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #007bff, #00bcd4);
      border-radius: 3px;
    }

    .project-image {
      position: relative;
      overflow: hidden;
      padding-top: 60%;
    }

    .project-image img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .project-card:hover .project-image img {
      transform: scale(1.1);
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 123, 255, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .project-links {
      display: flex;
      gap: 1rem;
    }

    .project-link {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #007bff;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      transform: translateY(20px);
      opacity: 0;
    }

    .project-card:hover .project-link {
      transform: translateY(0);
      opacity: 1;
    }

    .project-link:hover {
      background: #0056b3;
      color: #fff;
    }

    .project-content {
      padding: 1.5rem;
    }

    .project-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #212529;
    }

    .project-description {
      color: #6c757d;
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      background: #e9ecef;
      color: #495057;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.8rem;
      transition: all 0.3s ease;
    }

    .tech-tag:hover {
      background: #007bff;
      color: #fff;
    }

    @media (max-width: 767.98px) {
      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Chest X-ray Pneumonia Detection',
      description: 'Deep learning solution for automated pneumonia detection in chest X-rays using CNN architecture. Features real-time predictions with visual interpretability and an intuitive Streamlit interface.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'Google Colab'],
      github: 'https://github.com/Priyanka959/pneumonia-detection',
      demo: '#',
      image: 'assets/projects/xray.webp'
    },
    {
      name: 'Retail Invoice Generator',
      description: 'Full-stack application for generating real-time invoices with role-based dashboards and SQL database integration.',
      technologies: ['Spring Boot', 'React.js', 'SQL', 'REST APIs'],
      github: 'https://github.com/Priyanka959/Retail-billing-system',
      demo: '#',
      image: 'assets/projects/invoice.png'
    },
    {
      name: 'E-Learning Platform',
      description: 'MERN-based learning portal with authentication, gamified dashboards, and interactive video lessons.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      github: 'https://github.com/Priyanka959/elearning',
      demo: '#',
      image: 'assets/projects/e-learning_app.jpg'
    },
    {
      name: 'Soil Yield Prediction',
      description: 'ML application for predicting Arecanut tree yield using microbial and environmental data with interactive visualization.',
      technologies: ['Python', 'Streamlit', 'scikit-learn', 'XGBoost', 'Pandas'],
      github: 'https://github.com/Priyanka959/soil-yield-prediction',
      demo: '#',
      image: 'assets/projects/soil.jpeg'
    }
  ];
}