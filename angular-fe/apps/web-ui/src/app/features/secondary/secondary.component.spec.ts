import { ComponentFixture, TestBed } from '@angular/core/testing';

import { getTranslocoTestingModule } from '../../core/transloco-testing.module';
import { SecondaryComponent } from './secondary.component';

describe('SecondaryComponent', () => {
  let component: SecondaryComponent;
  let fixture: ComponentFixture<SecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryComponent, getTranslocoTestingModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
