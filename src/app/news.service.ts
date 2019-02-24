import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news = [
        { id:1, headling:"Apple iPhone 7", shortDescription: "Сервисы в Angular представляют довольно широкий спектр классов, которые выполняют некоторые специфические задачи, например, логгирование, работу с данными и т.д.", content: "Сервисы в Angular представляют довольно широкий спектр классов, которые выполняют некоторые специфические задачи, например, логгирование, работу с данными и т.д.", date: "2019-02-15T14:53:40Z", auhtor: "AlexM"},
        { id:2, headling:"Apple iPhone 7", shortDescription: "Сервисы в Angular представляют довольно широкий спектр классов, которые выполняют некоторые специфические задачи, например, логгирование, работу с данными и т.д.", content: "Сервисы в Angular представляют довольно широкий спектр классов, которые выполняют некоторые специфические задачи, например, логгирование, работу с данными и т.д.", date: "2019-02-15T14:53:40Z", auhtor: "AlexM"},
        { id:3, headling:"Apple iPhone 7", shortDescription: "Сервисы в Angular представляют довольно широкий спектр классов, которые выполняют некоторые специфические задачи, например, логгирование, работу с данными и т.д.", content: "Сервисы в Angular представляют довольно широкий спектр классов, которые выполняют некоторые специфические задачи, например, логгирование, работу с данными и т.д.", date: "2019-02-15T14:53:40Z", auhtor: "AlexM"}
    ];
  constructor() { }
  
  public getAll() {
	return this.news;
  }
  
  public getCount() {
  
  const maxId = this.news.reduce(function (e1, e2) {
      return (e1.id > e2.id) ? e1 : e2;
    }).id;
    let lastId = maxId + 1;

	return  lastId;
  }
 
 public getOne(id: number){
	return this.news = this.news.filter(news => news.id == id);
  }
  
  public remove(id: number){
	return this.news = this.news.filter(news => news.id !== id);
  }
  
  public add( id: number, headling: string, shortDescription: string, content: string, date: string, auhtor: string ){
	this.news.push({id, headling,shortDescription, content, date, auhtor})
  }
  
  public edit(id: number, headling: string, shortDescription: string, content: string, date: string, auhtor: string ){
    const foundIndex = this.news.findIndex(news => news.id == id);
	var oneNews = {id: id, headling: headling, shortDescription: shortDescription, content: content, date: date, auhtor: auhtor};
    this.news[foundIndex] = oneNews; 
   
  }
	
  
}
