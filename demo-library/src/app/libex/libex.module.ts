import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { HelloService } from './hello.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HelloComponent],
  exports: [HelloComponent]
})
export class LibexModule {

  static forRoot() {
    return {
      ngModule: LibexModule,
      providers: [ HelloService ]
    }
  }

}
