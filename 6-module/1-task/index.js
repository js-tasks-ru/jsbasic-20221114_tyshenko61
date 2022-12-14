/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #elem = null;
  constructor(rows) {
    this.#elem = document.createElement("table");
    this.#elem.insertAdjacentHTML('afterbegin', this.#template(rows));
    this.#elem.addEventListener('click', this.#onTableClick);
  }

  #template(rows) {
    const thead = ` <thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
    </thead>`;
    const tbody = rows.map(row =>`<tr>
              <td>${row.name}</td>
              <td>${row.age}</td>
              <td>${row.salary}</td>
              <td>${row.city}</td>
              <td><button>X</button></td>
            </tr>`).join('');

    return thead + tbody;
  }

  #onTableClick(event) {
    if (event.target.tagName !== "BUTTON") {
      return;
    }
    event.target.closest('tr').remove();

  }

  get elem() {
    return this.#elem;
}
}
