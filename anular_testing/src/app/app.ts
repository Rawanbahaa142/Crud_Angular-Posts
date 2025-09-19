import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './Basic/nav-bar/nav-bar';
import { Footer } from './Basic/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar, Footer],
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class App {}
