import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" routerLink="/">Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/projects" routerLinkActive="active">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/education" routerLinkActive="active">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/certificates" routerLinkActive="active">Certificates</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/skills" routerLinkActive="active">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/resume" routerLinkActive="active">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      box-shadow: 0 2px 4px rgba(0,0,0,.1);
    }
    .nav-link.active {
      font-weight: bold;
      position: relative;
    }
    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
    }
  `]
})
export class NavbarComponent {}