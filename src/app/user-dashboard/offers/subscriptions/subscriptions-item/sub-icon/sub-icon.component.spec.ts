import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubIconComponent } from './sub-icon.component';

describe('SubIconComponent', () => {
  let component: SubIconComponent;
  let fixture: ComponentFixture<SubIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
