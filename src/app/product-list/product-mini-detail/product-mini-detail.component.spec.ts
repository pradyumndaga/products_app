import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMiniDetailComponent } from './product-mini-detail.component';

describe('ProductMiniDetailComponent', () => {
  let component: ProductMiniDetailComponent;
  let fixture: ComponentFixture<ProductMiniDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMiniDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMiniDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
