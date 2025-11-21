import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="home-section">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6 text-center text-lg-start" data-aos="fade-right">
            <div class="heading-box">
              <span class="subtitle">Welcome to my portfolio</span>
              <h1 class="main-heading">Hi, I'm <span class="highlight">Priyanka Kulal</span></h1>
              <h2 class="sub-heading">Full Stack Developer & ML Engineer</h2>
            </div>
            <p class="description">
              Passionate developer specializing in full-stack development and machine learning. 
              Experienced in building web applications and implementing ML solutions for real-world problems.
            </p>
            <div class="cta-buttons" data-aos="fade-up" data-aos-delay="200">
              <a href="assets/resume/priyanka__resume.pdf" class="btn btn-primary btn-lg me-3" download>
                <i class="bi bi-download me-2"></i>Download CV
              </a>
              <a href="#contact" class="btn btn-outline-primary btn-lg">
                <i class="bi bi-chat-text me-2"></i>Let's Talk
              </a>
            </div>
            <div class="social-links mt-4" data-aos="fade-up" data-aos-delay="400">
              <a href="https://github.com/yourusername" target="_blank" class="social-icon">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" class="social-icon">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" class="social-icon">
                <i class="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <div class="profile-wrapper">
              <div class="profile-card">
                <img src="assets/profile/profile.png" alt="Priyanka Kulal" class="profile-image">
              </div>
              <div class="tech-stack" data-aos="fade-up" data-aos-delay="200">
                <span class="tech-badge">MERN</span>
                <span class="tech-badge">SPRING</span>
                <span class="tech-badge">JAVA</span>
                <span class="tech-badge">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .home-section {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      padding: 80px 0;
      overflow: hidden;
    }

    .heading-box {
      margin-bottom: 2rem;
    }

    .subtitle {
      font-size: 1.1rem;
      color: #6c757d;
      display: block;
      margin-bottom: 1rem;
    }

    .main-heading {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .highlight {
      color: #007bff;
      position: relative;
      display: inline-block;
    }

    .highlight::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 8px;
      background: rgba(0, 123, 255, 0.2);
      bottom: 5px;
      left: 0;
      z-index: -1;
    }

    .sub-heading {
      font-size: 1.75rem;
      color: #6c757d;
      margin-bottom: 1.5rem;
    }

    .description {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #495057;
      margin-bottom: 2rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-icon {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: #495057;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .social-icon:hover {
      transform: translateY(-3px);
      color: #007bff;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }

    .profile-wrapper {
      position: relative;
      padding: 2rem;
    }

    .profile-card {
      position: relative;
      background: #fff;
      padding: 1rem;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .profile-image {
      width: 100%;
      border-radius: 15px;
      transition: transform 0.3s ease;
    }

    .profile-card:hover .profile-image {
      transform: scale(1.02);
    }

    .experience-badge {
      position: absolute;
      right: -20px;
      bottom: -20px;
      background: #007bff;
      color: #fff;
      padding: 1rem;
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .experience-badge .number {
      font-size: 1.5rem;
      font-weight: bold;
      display: block;
      line-height: 1;
    }

    .experience-badge .text {
      font-size: 0.8rem;
      opacity: 0.9;
    }

    .tech-stack {
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }

    .tech-badge {
      background: #fff;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      color: #495057;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .tech-badge:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
      color: #007bff;
    }

    @media (max-width: 991.98px) {
      .main-heading {
        font-size: 2.5rem;
      }
      .profile-wrapper {
        margin-top: 3rem;
      }
      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class HomeComponent {}