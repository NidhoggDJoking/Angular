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

//? @Component最常用的几个选项:
// selector：这个 CSS 选择器用于在模板中标记出该指令，并触发该指令的实例化。
// template：组件的内联模板，为组件展示的内容，一般内容比较少时使用。如果提供了它，就不要再用 templateUrl 提供模板了
// templateUrl：组件模板文件的 URL。如果提供了它，就不要再用 template 来提供内联模板了。
// providers	：使用一个 令牌 配置该指令或组件的 注入器，该令牌会映射到一个依赖项的提供商
// exportAs	：一个或多个名字，可以用来在模板中把该指令赋值给一个变量。当有多个名字时，请使用逗号分隔它们
