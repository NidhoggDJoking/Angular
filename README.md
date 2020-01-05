<p align="center">
  <a href="https://github.com/NidhoggDJoking" target="_blank">
    <img width="180" src="https://raw.githubusercontent.com/NidhoggDJoking/VueCli/master/src/image/Logo/joker.png" alt="logo">
  </a>
</p>


```
                             _                      _                 ____ _     ___
                            / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
                           / △\ |  _ \ / _` | | | | |/ _` | '__|   | |   | |    | |
                          / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
                         /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                                        |___/

```

<p align="center">
  <a href="https://www.angularjs.net.cn/" target="_blank">
    <img src="https://img.shields.io/badge/Angular%20Cli-8.3.2-brightgreen">
  </a>
  <a href="https://nodejs.org/en/" target="_blank">
    <img src="https://img.shields.io/badge/Node-12.6.0-yellow">
  </a>
   <a href="https://ng.ant.design/" target="_blank">
    <img src="https://img.shields.io/badge/Ant%20Design-8.3.0-blue">
  </a>
</p>

### 例如
```
ng new my-app

cd  my-app

ng serve
```

### 创建组件(components 文件夹下创建组件)
```
ng g component components/componentName

```
### 组件生命周期

Angular的每一个组件都存在一个生命周期，从创建，变更到销毁，就是一个组件的完整的生命周期。Angular提供组件生命周期钩子，把组件在生命周期种的这些关键时刻暴露出来，赋予在这些关键结点和组件进行交互的能力。

Angular的生命周期钩子有八种,按照生命周期的执行顺序如下

* 1. ngOnChanges

时机：当被绑定的输入属性（@input）的值发生变化时调用，首次调用一定会发生在 ngOnInit之前；该回调方法会收到一个包含当前值和原值的changes对象。在有输入属性的情况下才会调用，该方法接受当前和上一属性值的SimpleChanges对象。如果有输入属性，会在ngOnInit之前调用。

接口：OnChanges；

适用范围： 指令和组件种；


* 2. ngOnInit

时机：在第一轮 ngOnChanges 完成之后调用。 ( 也就是说当每个输入属性（@input）的值都触发了一次ngOnChanges 之后才会调用ngOnInit ，此时所有的输入属性都已经有了正确的初始绑定值 )；在组件初始化的时候调用，只调用一次，在第一次调用ngOnChanges之后调用

接口： OnInit

适用范围： 指令和组件种

 

* 3. ngDoCheck 

时机：在每个 Angular 变更检测周期中调用;用来检测所有变化（无论是Angular本身能检测还是无法检测的），并作出相应行动。在每次执行“变更检测”时被调用。在组件定义的属性或方法变更时调用(用于脏值之检测，非常耗性能，因为会把所有的属性和方法都检测一遍）

接口： DoCheck;

适用范围： 指令和组件中

 

* 4. ngAfterContentInit 

时机：当把内容投影进组件之后调用；在组件内容初始化之后调用，在第一次ngDoCheck之后调用，只调用一次

接口：AfterContentInit 

适用范围： 组件中

* 5. ngAfterContentChecked

时机：每次完成被投影组件内容的变更检测之后调用；在组件每次检查内容放生变更时调用。在ngAfterContentInit和每次ngDoCheck之后调用

接口：AfterContentChecked

适用范围：组件中

 

* 6. ngAfterViewInit

时机：初始化完组件视图及其子视图之后调用；在组件相应的视图初始化之后调用，第一次ngAfterContentChecked之后调用，只调用一次

接口：AfterViewInit

适用范围：组件中

 

* 7. ngAfterViewChecked

时机：每次做完组件视图和子视图的变更检测之后调用；在组件每次检查视图发生变更时调用。ngAfterViewInit和每次ngAfterContentChecked之后调用。

接口：AfterViewChecked；

适用范围：组件中

 

* 8. ngOnDestroy

时机：当 Angular 每次销毁指令 / 组件之前调用；在Angular销毁指令或组件之前做一些清理工作，比如退订可观察对象和移除事件处理器，以免导致内存泄漏。

接口：OnDestroy

适用范围：指令和组件中
   
   
### 目录结构

```
my-app
  |__e2e/
  |   |__app.e2e-spec.ts
  |   |__app.po.ts
  |   |__tsconfig.json
  |__node_modules/...
  |__src/...
  |__.editorconfig
  |__.gitignore
  |__angular-cli.json
  |__karma.conf.js
  |__package.json
  |__protractor.conf.js
  |__README.md
  |__tslint.json
  
```
 
```
├── e2e
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   └── tsconfig.e2e.json
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── README.md
├── tsconfig.json
└── tslint.json

```  
</br>

### 目录概序

| 首层目录   |  作用 | 
| :-------- |:------| 
| node_modules |        第三方依赖包存放目录 | 
| e2e |                 端到端的测试目录  用来做自动测试的  |
| src |                 应用源代码目录 | 
| .angular-cli.json |   Angular命令行工具的配置文件。后期可能会去修改它，引一些其他的第三方的包  比如jquery等 | | 
| karma.conf.js |       karma是单元测试的执行器，karma.conf.js是karma的配置文件 | 
| package.json |        标准的npm工具的配置文件，文件里面列出了该应用程序所使用的第三方依赖包。实际上我们在新建项目的时候，等了半天就是在下载第三方依赖包。下载完成后会放在node_modules这个目录中，后期我们可能会修改这个文件 | 
| protractor.conf.js |  做自动化测试的配置文件 |
| README.md |           说明文件 |
| tslint.json |         是tslint的配置文件，用来定义TypeScript代码质量检查的规则，不用管它 | 
  

### Src目录

```
src/
 |__app/
 |   |__app.component.css
 |   |__app.component.html
 |   |__app.component.spec.ts
 |   |__app.component.ts
 |   |__app.module.ts
 |__assets/
 |   |__.gitkeep
 |__environments/
 |   |__environment.prod.ts
 |   |__environment.ts
 |__favicon.ico
 |__index.html
 |__main.ts
 |__polyfills.ts
 |__styles.css
 |__test.ts
 |__tsconfig.json
 
```

| src目录    |  作用 | 
| :-------- |:------| 
|app文件|               包含应用的组件和模块，我们要写的代码都在这个目录  |
|assets文件|            资源目录，存储静态资源的  比如图片  |
|environments文件|      环境配置。Angular是支持多环境开发的，我们可以在不同的环境下（开发环境，测试环境，生产环境）共用一套代码，主要用来配置环境的 |
|index.html|            整个应用的根html，程序启动就是访问这个页面  |
|main.ts|               整个项目的入口点，Angular通过这个文件来启动项目 |
|polyfills.ts|          主要是用来导入一些必要库，为了让Angular能正常运行在老版本下 |
|styles.css|            主要是放一些全局的样式|
|tsconfig.app.json|     TypeScript编译器的配置,添加第三方依赖的时候会修改这个文件
|tsconfig.spec.json|    不用管  |
|test.ts|               自动化测试用的  |
|typings.d.ts|          不用管  |
  

### 命令

| 命令         |  说明 | 
| :--------   | :------ | 
|add	 	      |将对外部库的支持添加到项目中。|
|analytics	 	|配置Angular CLI使用度量的收集。请参见https://v8.angular.io/cli/usage-analytics-gathering|
|build		    |在给定的输出路径上将Angular应用程序编译到名为dist/的输出目录中。必须从工作区目录中执行|
|config	 	    |在工作区的angular.json文件中检索或设置Angular配置|
|doc		      |在浏览器中打开官方Angular文档（angular.io），并搜索给定的关键字|
|e2e		      |构建并提供一个Angular应用程序，然后使用量角器运行端到端测试|
|generate		  |根据原理图生成和/或修改文件|
|help	 	      |列出可用命令及其简短描述|
|lint		      |在给定项目文件夹中的Angular应用程序代码上运行lint工具|
|new		      |创建新工作区和初始Angular应用程序|
|run	 	      |使用项目中定义的可选自定义构建器配置运行Architect目标|
|serve		    |构建并提供应用程序，重建文件更改|
|test		      |在项目中运行单元测试|
|update	 	    |更新您的应用程序及其依赖项。 见https://update.angular.io/|
|version		  |输出Angular CLI版本|
|xi18n	 	    |从源代码中提取i18n消息|


