/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import { Injectable, signal } from '@angular/core';
import { Product } from '../pages/products-list/products-list.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    const existingProduct = this.cart().find((p) => p.id === product.id);

    if (existingProduct) return
    
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(product: Product) {
    this.cart.set(this.cart().filter((p) => p.id !== product.id));
  }
}
