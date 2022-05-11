import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationSpaceComponent } from './donation-space.component';

describe('DonationSpaceComponent', () => {
  let component: DonationSpaceComponent;
  let fixture: ComponentFixture<DonationSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
