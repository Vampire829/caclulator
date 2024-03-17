import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaclulatorComponent } from './caclulator.component';

describe('CaclulatorComponent', () => {
  let component: CaclulatorComponent;
  let fixture: ComponentFixture<CaclulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaclulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaclulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
