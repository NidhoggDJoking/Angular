// BrowserModule,浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';

// angular核心模块
import { NgModule } from '@angular/core';

// 引用路由文件
import { AppRoutingModule } from './app-routing.module';

// 根组件
import { AppComponent } from './app.component';

// 添加组件
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { UserComponent } from './components/user/user.component';

// @NgModule装饰器，@NgModule接受一个元数据对象，告诉angular如何编译和启动应用
@NgModule({
  // 配置当前项目运行的组件
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    UserComponent
  ],
  // 配置当前模块运行依赖的其他模块
  imports: [
    BrowserModule,
    AppRoutingModule, // 依赖注入路由模块
  ],
  // 配置项目所需服务
  providers: [],
  // 指定应用的主视图(称为根组件) 通过引导angular来启动应用 ,这里一般写的是根组件
  bootstrap: [AppComponent]
})
// 根模块不需导出任何东西,其他模块不需导入根模块
export class AppModule { }
