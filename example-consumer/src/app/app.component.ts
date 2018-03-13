import {Component} from '@angular/core';
import {HelloService} from '../../../libex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private helloService: HelloService) {
  }

  sayHello() {
    this.helloService.sayHello();
  }
}
