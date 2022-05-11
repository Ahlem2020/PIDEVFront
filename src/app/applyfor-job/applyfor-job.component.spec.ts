import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyforJobComponent } from './applyfor-job.component';

describe('ApplyforJobComponent', () => {
  let component: ApplyforJobComponent;
  let fixture: ComponentFixture<ApplyforJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyforJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyforJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
