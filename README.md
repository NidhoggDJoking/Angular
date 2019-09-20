<p align="center">
  <a href="https://github.com/NidhoggDJoking" target="_blank">
    <img width="150" src="https://github.com/NidhoggDJoking/VueCli/blob/master/src/image/Logo/Angular.png" alt="logo">
  </a>
</p>

<h1 align="center">Angular Cli</h1>

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

```
                              _                      _                 ____ _     ___
                             / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
                            / △\ |  _ \ / _` | | | | |/ _` | '__|   | |   | |    | |
                           / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
                          /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                                         |___/

```

<h3 align="center">目录结构</h3> 

| 首层目录   |  作用 | 
| :-------- |:------| 
| node_modules |        第三方依赖包存放目录 | 
| e2e |                 端到端的测试目录  用来做自动测试的  |
| src |                 应用源代码目录 | 
| .angular-cli.json |   Angular命令行工具的配置文件。后期可能会去修改它，引一些其他的第三方的包  比如jquery等 | | 
| karma.conf.js |       karma是单元测试的执行器，karma.conf.js是karma的配置文件 | 
| package.json |        这是一个标准的npm工具的配置文件，这个文件里面列出了该应用程序所使用的第三方依赖包。实际上我们在新建项目的时候，等了半天就是在下载第三方依赖包。下载完成后会放在node_modules这个目录中，后期我们可能会修改这个文件 | 
| protractor.conf.js |  也是一个做自动化测试的配置文件 |
| README.md |           说明文件 |
| tslint.json |         是tslint的配置文件，用来定义TypeScript代码质量检查的规则，不用管它 | 

</br>
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

</br>

<h3 align="center">命令</h3>

| 命令         |  说明 | 
| :--------   | :------ | 
|add	 	      |将对外部库的支持添加到项目中。|
|analytics	 	|配置Angular CLI使用度量的收集。请参见https://v8.angular.io/cli/usage-analytics-gathering。|
|build		    |在给定的输出路径上将Angular应用程序编译到名为dist/的输出目录中。必须从工作区目录中执行。|
|config	 	    |在工作区的angular.json文件中检索或设置Angular配置。|
|doc		      |在浏览器中打开官方Angular文档（angular.io），并搜索给定的关键字。|
|e2e		      |构建并提供一个Angular应用程序，然后使用量角器运行端到端测试。|
|generate		  |根据原理图生成和/或修改文件。|
|help	 	      |列出可用命令及其简短描述。|
|lint		      |在给定项目文件夹中的Angular应用程序代码上运行lint工具。|
|new		      |创建新工作区和初始Angular应用程序。|
|run	 	      |使用项目中定义的可选自定义构建器配置运行Architect目标。|
|serve		    |构建并提供应用程序，重建文件更改。|
|test		      |在项目中运行单元测试。|
|update	 	    |更新您的应用程序及其依赖项。 见https://update.angular.io/|
|version		  |输出Angular CLI版本。|
|xi18n	 	    |从源代码中提取i18n消息。|

</br>

#### 例如
```
ng new my-app

cd  my-app

ng serve
```
