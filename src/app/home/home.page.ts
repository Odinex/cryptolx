import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'some text';
  constructor(private router: Router) {

  }

  getGreeting() {
    return 'wassup';
  }

  openDetailsPage() {
// Two ways to navigate
    // 1st is angular router
    // 2nd from the view(html)
    this.router.navigateByUrl('/details').then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.error(err); // when there's an error
    });;
  }
}
