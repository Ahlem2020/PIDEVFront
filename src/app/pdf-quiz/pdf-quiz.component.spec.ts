import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfQuizComponent } from './pdf-quiz.component';

describe('PdfQuizComponent', () => {
  let component: PdfQuizComponent;
  let fixture: ComponentFixture<PdfQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
