import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridProductComponent } from './grid-product.component';

describe('GridProductComponent', () => {
  let component: GridProductComponent;
  let fixture: ComponentFixture<GridProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridProductComponent]
    });
    fixture = TestBed.createComponent(GridProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
