import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  // 结束可以不用';'隔开.
  public tit = 'News works!'

  // 可以不写 数据类型.
  public flag:boolean = true;

  // 可以不写 public开头.
  imgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569171810006&di=fa5573bed7c442a1494b7aaa474c9f85&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201312%2F14%2F20131214191140_RS4KN.jpeg'
  
  public list=[
    {"tit":'One for All'},
    {"tit":'All for One'}
  ]

  public status:number = 1;

  public today = new Date();

  constructor() {
      console.log(this.today)
  }

  ngOnInit() {
  }
  start(){
    alert("自定义方法")
  }
  gettit(){
    alert(this.tit)
  }
  settit(){
    this.tit = '通过方法改变tit的值'
  }
  getkey(e){
    console.log(e)
  }
}
 