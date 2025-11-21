import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer py-4 bg-dark text-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p class="mb-0">© {{ currentYear }} Priyanka Kulal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: auto;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}