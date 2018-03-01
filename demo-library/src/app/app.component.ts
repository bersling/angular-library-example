import { Component } from '@angular/core';
import {HelloService} from './libex';

@Component({
  selector: 'libex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private helloService: HelloService) {}

  sayHello() {
    this.helloService.sayHello();
  }
}
