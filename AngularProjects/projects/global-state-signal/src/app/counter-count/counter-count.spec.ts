import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterCount } from './counter-count';

describe('CounterCount', () => {
  let component: CounterCount;
  let fixture: ComponentFixture<CounterCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterCount],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
