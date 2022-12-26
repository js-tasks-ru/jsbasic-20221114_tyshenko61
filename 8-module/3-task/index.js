export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product) {
      return;
    }
    const productCart = this.cartItems.find((item) => item.product.id === product.id);
    if (productCart) {
      productCart.count++;
      this.onProductUpdate(productCart);
    } else {
      const newProductCart = {product, count: 1};
      this.cartItems.push(newProductCart);
      this.onProductUpdate(newProductCart);
    }
  }

  updateProductCount(productId, amount) {
    const indexProductCart = this.cartItems.findIndex((item) => item.product.id === productId);
    if (indexProductCart >= 0) {
      this.cartItems[indexProductCart].count += amount;
      if (this.cartItems[indexProductCart].count === 0) {
        this.cartItems.splice(indexProductCart, 1)
      }
      this.onProductUpdate(this.cartItems[indexProductCart]);
    }
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce((count, item) => count + item.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((price, item) => price + item.product.price * item.count, 0);
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

