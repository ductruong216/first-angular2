import { ProductCatagoryModule } from './product-catagory.module';

describe('ProductCatagoryModule', () => {
  let productCatagoryModule: ProductCatagoryModule;

  beforeEach(() => {
    productCatagoryModule = new ProductCatagoryModule();
  });

  it('should create an instance', () => {
    expect(productCatagoryModule).toBeTruthy();
  });
});
