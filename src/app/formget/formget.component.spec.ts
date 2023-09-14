import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgetComponent } from './formget.component';

describe('FormgetComponent', () => {
  let component: FormgetComponent;
  let fixture: ComponentFixture<FormgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
