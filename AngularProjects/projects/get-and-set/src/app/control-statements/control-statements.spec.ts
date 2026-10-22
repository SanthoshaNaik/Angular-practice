import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlStatements } from './control-statements';

describe('ControlStatements', () => {
  let component: ControlStatements;
  let fixture: ComponentFixture<ControlStatements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlStatements],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlStatements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
