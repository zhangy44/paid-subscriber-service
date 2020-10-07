import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsysComponent } from './gridsys.component';

describe('GridsysComponent', () => {
  let component: GridsysComponent;
  let fixture: ComponentFixture<GridsysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
