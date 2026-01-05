import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosItemComponent } from './favoritos-item.component';

describe('FavoritosItemComponent', () => {
  let component: FavoritosItemComponent;
  let fixture: ComponentFixture<FavoritosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritosItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
