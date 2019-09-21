// 引入核心模块的Component
import { Component } from '@angular/core';

@Component({
  // 组件名称
  selector: 'app-root',
  // HTML
  templateUrl: './app.component.html',
  // CSS
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 定义属性(类似于Vue的data)
  title = 'Angular of Joking';
  link = '以下是一些帮助您入门的链接';
  constructor(){
    // 构造函数
  }
}
