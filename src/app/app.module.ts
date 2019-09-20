import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; // 引用路由文件
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // 依赖注入路由模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
