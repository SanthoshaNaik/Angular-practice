import { TestBed } from '@angular/core/testing';
import { ProductsTs } from './products.js';

describe('ProductsTs', () => {
  let service: ProductsTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
