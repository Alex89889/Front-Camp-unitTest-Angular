import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

	public news;
	private _newsService;
	myForm : FormGroup;
	
    constructor(private newsService: NewsService){
		this._newsService=newsService;
        this.myForm = new FormGroup({
             
            "headling": new FormControl("", Validators.required),
			"shortDescription": new FormControl("", Validators.required),
            "content": new FormControl(),
			"image": new FormControl(),
			"date": new FormControl(),
			"auhtor": new FormControl()
        });
    }
  
  ngOnInit() {

  }
  
  addNews(headling, shortDescription, content, date, auhtor){
  
	let newsId = this._newsService.getCount();
	this._newsService.add(newsId, headling, shortDescription, content, date, auhtor);
	this.news = this._newsService.getAll();
	console.log(this.news);
	alert("News added!");
  }

}
