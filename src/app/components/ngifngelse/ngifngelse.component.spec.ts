import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifngelseComponent } from './ngifngelse.component';

describe('NgifngelseComponent', () => {
  let component: NgifngelseComponent;
  let fixture: ComponentFixture<NgifngelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifngelseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifngelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
