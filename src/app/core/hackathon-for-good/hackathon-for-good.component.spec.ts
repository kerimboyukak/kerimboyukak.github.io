import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonForGoodComponent } from './hackathon-for-good.component';

describe('HackathonForGoodComponent', () => {
  let component: HackathonForGoodComponent;
  let fixture: ComponentFixture<HackathonForGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HackathonForGoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackathonForGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
