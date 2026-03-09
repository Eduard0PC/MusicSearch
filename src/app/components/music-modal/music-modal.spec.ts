import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicModal } from './music-modal';

describe('MusicModal', () => {
  let component: MusicModal;
  let fixture: ComponentFixture<MusicModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicModal],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
