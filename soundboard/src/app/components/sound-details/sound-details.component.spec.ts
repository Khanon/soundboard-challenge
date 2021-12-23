import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundDetailsComponent } from './sound-details.component';

describe('SoundDetailsComponent', () => {
  let component: SoundDetailsComponent;
  let fixture: ComponentFixture<SoundDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
