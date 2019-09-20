import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 模块引入
import {HomeComponent} from './components/home/home.component'
import {NewsComponent} from './components/news/news.component'
import {UserComponent} from './components/user/user.component'

// 配置路由
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'news',
    component:NewsComponent,
  },
  {
    path:'user',
    component:UserComponent,
  },
  // 匹配不到路由时候加载的组件
  {
    path:'**',  // 任意路由
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
