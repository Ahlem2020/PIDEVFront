import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCondidacyComponent } from './show-condidacy.component';

describe('ShowCondidacyComponent', () => {
  let component: ShowCondidacyComponent;
  let fixture: ComponentFixture<ShowCondidacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCondidacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCondidacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
