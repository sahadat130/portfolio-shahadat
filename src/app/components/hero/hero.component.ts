import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  titles = ['.NET Developer', 'Backend Engineer', 'Software Architect', 'Full Stack Developer'];
  displayText = '';
  private currentTitleIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typingInterval: any;

  ngOnInit() {
    this.startTyping();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  private startTyping() {
    this.typingInterval = setInterval(() => {
      const currentTitle = this.titles[this.currentTitleIndex];

      if (!this.isDeleting) {
        this.displayText = currentTitle.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;

        if (this.currentCharIndex === currentTitle.length) {
          this.isDeleting = true;
          setTimeout(() => {}, 1500);
        }
      } else {
        this.displayText = currentTitle.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;

        if (this.currentCharIndex === 0) {
          this.isDeleting = false;
          this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
        }
      }
    }, this.isDeleting ? 50 : 100);
  }
}
