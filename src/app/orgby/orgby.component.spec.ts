import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgbyComponent } from './orgby.component';

describe('OrgbyComponent', () => {
  let component: OrgbyComponent;
  let fixture: ComponentFixture<OrgbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
