import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  elem = null;
  product = {};
  constructor(product) {
    this.elem = createElement(this.#template(product));
    this.product = product;
    this.elem.querySelector(".card__button").addEventListener('click', this.#onProductAdd);
  }

#template(product) {
 return `<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
        <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
  </div>`;
  }

  #onProductAdd = () => {
  const addProduct = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
    detail: this.product.id, // Уникальный идентификатора товара из объекта товара
    bubbles: true // это событие всплывает - это понадобится в дальнейшем
    });
    this.elem.dispatchEvent(addProduct);
  }

}
