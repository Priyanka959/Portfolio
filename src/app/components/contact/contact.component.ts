import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="contact-section py-5">
      <div class="container">
        <h2 class="text-center mb-5" data-aos="fade-up">Contact Me</h2>
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
            <div class="card" data-aos="fade-up">
              <div class="card-body">
                <div class="contact-info text-center">
                  <div class="mb-4">
                    <i class="bi bi-envelope-fill fs-1 text-primary"></i>
                    <h3 class="h5 mt-3">Email</h3>
                    <a href="mailto:priyankakulal1205&#64;gmail.com" class="text-decoration-none">
                      priyankakulal1205&#64;gmail.com
                    </a>
                  </div>
                  
                  <div class="mb-4">
                    <i class="bi bi-linkedin fs-1 text-primary"></i>
                    <h3 class="h5 mt-3">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/priyanka-kulal-b04963313/" target="_blank" class="text-decoration-none">
                      linkedin.com/in/priyanka-kulal-b04963313
                    </a>
                  </div>
                  
                  <div class="mb-4">
                    <i class="bi bi-github fs-1 text-primary"></i>
                    <h3 class="h5 mt-3">GitHub</h3>
                    <a href="https://github.com/Priyanka959" target="_blank" class="text-decoration-none">
                      github.com/Priyanka959
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      min-height: calc(100vh - 56px);
    }
    .card {
      border: none;
      box-shadow: 0 0 20px rgba(0,0,0,.1);
    }
    .contact-info a {
      color: #007bff;
      transition: color 0.3s;
    }
    .contact-info a:hover {
      color: #0056b3;
    }
  `]
})
export class ContactComponent {}