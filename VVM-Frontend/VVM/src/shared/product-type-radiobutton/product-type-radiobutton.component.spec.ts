import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeRadiobuttonComponent } from './product-type-radiobutton.component';

describe('ProductTypeRadiobuttonComponent', () => {
  let component: ProductTypeRadiobuttonComponent;
  let fixture: ComponentFixture<ProductTypeRadiobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTypeRadiobuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductTypeRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
