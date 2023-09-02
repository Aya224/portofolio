import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPortoComponent } from './child-porto.component';

describe('ChildPortoComponent', () => {
  let component: ChildPortoComponent;
  let fixture: ComponentFixture<ChildPortoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildPortoComponent]
    });
    fixture = TestBed.createComponent(ChildPortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
