import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildskillComponent } from './childskill.component';

describe('ChildskillComponent', () => {
  let component: ChildskillComponent;
  let fixture: ComponentFixture<ChildskillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildskillComponent]
    });
    fixture = TestBed.createComponent(ChildskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
