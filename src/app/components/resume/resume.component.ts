import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  template: `
    <section class="resume-section py-5">
      <div class="container">
        <h2 class="text-center mb-5" data-aos="fade-up">Resume</h2>
        <div class="row justify-content-center">
          <div class="col-12" data-aos="fade-up">
            <div class="card p-3 mb-4">
              <div class="d-flex justify-content-between align-items-center">
                <h3 class="h5 mb-0">My Resume</h3>
                <a href="assets/resume/priyanka__resume.pdf" class="btn btn-primary" download>
                  Download PDF
                </a>
              </div>
            </div>
            <div class="resume-preview" data-aos="fade-up">
              <iframe [src]="pdfUrl" title="Resume Preview"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .resume-preview {
      width: 100%;
      height: 800px;
      border: 1px solid #dee2e6;
      border-radius: 4px;
      overflow: hidden;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    .card {
      box-shadow: 0 2px 4px rgba(0,0,0,.1);
    }
  `]
})
export class ResumeComponent {
  pdfUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/resume/priyanka__resume.pdf');
  }
}