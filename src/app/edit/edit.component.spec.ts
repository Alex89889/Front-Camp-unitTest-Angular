import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsService } from '../news.service';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ EditComponent ],
    imports: [ FormGroup, FormControl, Validators, ActivatedRoute ],
  })
  .compileComponents();
}));

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ EditComponent ],
    providers: [ NewsService ]
  })
  .compileComponents();
}))


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
