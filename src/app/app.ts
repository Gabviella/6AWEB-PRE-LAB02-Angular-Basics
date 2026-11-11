import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';


@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Gabriella Marie Magsino';
  location = 'Angeles City';
  email = 'gabriellamariemagsino@gmail.com';
  phone = '09759007198';

  profile = 'I am an aspiring web developer who enjoys creating clean, responsive, and user-friendly websites. I am eager to improve my coding skills, explore new technologies, and turn creative ideas into practical applications. My goal is to become a skilled developer and build websites that make a difference.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
}
}
