import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacktopiaComponent } from './hacktopia.component';

describe('HacktopiaComponent', () => {
  let component: HacktopiaComponent;
  let fixture: ComponentFixture<HacktopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HacktopiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HacktopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
