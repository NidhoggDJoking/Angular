import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; // 引用路由文件
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // 依赖注入路由模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
