import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'some text';
  todos = ['dj using spotify', 'word generation', 'activity', 'uber for road assistance', 'recepti s dostavka v bg'];
  newTodo = 'ionic';
  constructor(private router: Router) {

  }

  addTodo() {
    this.todos.push(this.newTodo);
    this.newTodo = '';
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

  printToFile() {
    console.log(this.todos);
  }
}
