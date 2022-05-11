import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCondidacyComponent } from './detail-condidacy.component';

describe('DetailCondidacyComponent', () => {
  let component: DetailCondidacyComponent;
  let fixture: ComponentFixture<DetailCondidacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCondidacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCondidacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
