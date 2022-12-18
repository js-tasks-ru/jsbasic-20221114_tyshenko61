import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = this.#render();
    this.modalTitle = this.modal.querySelector('.modal__title');
    this.modalBody = this.modal.querySelector('.modal__body');
  }

#render() {
  return createElement(`
      <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>

        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>

    </div>`);
  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.append(this.modal);
    this.modal.addEventListener('click', (event) => this.closeModal(event));
    document.addEventListener('keydown', (event) => this.keydownHandler(event));
  }

  setTitle(title) {
    this.modalTitle.textContent = title;
  }

  setBody(node) {
    this.modalBody.innerHTML = '';
    this.modalBody.append(node);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this.keydownHandler);
    this.modal.remove();
  }

   closeModal(event) {
    if (event.target.closest('.modal__close')) {
      this.close();
    }
  }

  keydownHandler(event) {
    if (event.code === 'Escape') {
      this.close();
    }
  }
}
