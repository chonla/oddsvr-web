import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVrComponent } from './new-vr.component';

describe('NewVrComponent', () => {
  let component: NewVrComponent;
  let fixture: ComponentFixture<NewVrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
