import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartdateComponent } from './startdate.component';

describe('StartdateComponent', () => {
  let component: StartdateComponent;
  let fixture: ComponentFixture<StartdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
