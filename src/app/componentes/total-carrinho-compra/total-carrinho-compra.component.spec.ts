import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCarrinhoCompraComponent } from './total-carrinho-compra.component';

describe('TotalCarrinhoCompraComponent', () => {
  let component: TotalCarrinhoCompraComponent;
  let fixture: ComponentFixture<TotalCarrinhoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCarrinhoCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCarrinhoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
