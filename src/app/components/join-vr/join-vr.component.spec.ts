import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinVrComponent } from './join-vr.component';

describe('JoinVrComponent', () => {
  let component: JoinVrComponent;
  let fixture: ComponentFixture<JoinVrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinVrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinVrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
