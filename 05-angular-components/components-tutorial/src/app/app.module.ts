import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { DataComponent } from './data/data.component';
import { IfComponent } from './if/if.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ButtonComponent,
    InputComponent,
    OutputComponent,
    DataComponent,
    IfComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
