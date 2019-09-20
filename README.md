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



| 首层目录：  |  作用 | 
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

| src目录：  |  作用 | 
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

<h3>安装</h3>