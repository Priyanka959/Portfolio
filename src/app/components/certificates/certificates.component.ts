import { Component } from '@angular/core';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  credential: string;
}

@Component({
  selector: 'app-certificates',
  template: `
    <section class="certificates-section py-5">
      <div class="container">
        <h2 class="text-center mb-5" data-aos="fade-up">Certifications</h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let cert of certificates" data-aos="fade-up">
            <div class="card h-100">
              <div class="card-body text-center">
                <h5 class="card-title">{{ cert.title }}</h5>
                <p class="card-text text-muted">{{ cert.issuer }}</p>
                <p class="card-text"><small class="text-muted">{{ cert.date }}</small></p>
                <a [href]="cert.credential" class="btn btn-outline-primary" target="_blank">
                  View Credential
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .card {
      transition: transform 0.3s;
      box-shadow: 0 4px 6px rgba(0,0,0,.1);
    }
    .card:hover {
      transform: translateY(-5px);
    }
  `]
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      title: 'SQL for Data Analytics',
      issuer: 'Udemy',
      date: '2024',
      logo: 'assets/certificates/udemy.png',
      credential: '#'
    },
    {
      title: 'React.js',
      issuer: 'Coursera',
      date: '2024',
      logo: 'assets/certificates/coursera.png',
      credential: '#'
    },
    {
      title: 'MongoDB - The Complete Developer\'s Guide',
      issuer: 'MongoDB University',
      date: '2023',
      logo: 'assets/certificates/mongodb.png',
      credential: '#'
    },
    {
      title: 'Computer Architecture and Organization',
      issuer: 'NPTEL',
      date: '2023',
      logo: 'assets/certificates/nptel.png',
      credential: '#'
    }
  ];
}