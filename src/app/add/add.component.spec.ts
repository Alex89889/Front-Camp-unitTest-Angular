import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsService } from '../news.service';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let newsService: NewsService;
  let spy: jasmine.Spy;
  
  beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ AddComponent ],
	imports: [ FormGroup, FormControl, Validators ],
    providers: [ NewsService ]
  })
  .compileComponents();
}))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
	newsService = fixture.debugElement.injector.get(NewsService);
    component = fixture.componentInstance;
	spy = spyOn(newsService, 'getCount').and.callThrough();
    fixture.detectChanges();
  });
  
 it('should create', () => {
	  let addNews = fixture.debugElement.query(By.css("button"));
	  addNews.triggerEventHandler("submit",null);
      fixture.detectChanges()
	 // console.log(this.news);
    expect(alert("News added!"));
  });
 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
