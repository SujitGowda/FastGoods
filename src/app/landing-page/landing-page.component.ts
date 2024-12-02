import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone:false
})
export class LandingPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const overlays = document.querySelectorAll('.text-overlay');

    const checkVisibility = () => {
      overlays.forEach((overlay) => {
        const rect = (overlay as HTMLElement).getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          overlay.classList.add('visible');
        } else {
          overlay.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
  }
}
