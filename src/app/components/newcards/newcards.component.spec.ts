import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcardsComponent } from './newcards.component';

describe('NewcardsComponent', () => {
  let component: NewcardsComponent;
  let fixture: ComponentFixture<NewcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
