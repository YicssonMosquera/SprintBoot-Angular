import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosListarComponent } from './productos-listar.component';

describe('ProductosListarComponent', () => {
  let component: ProductosListarComponent;
  let fixture: ComponentFixture<ProductosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
