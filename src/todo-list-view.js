// todo-list-view

import ItemView from 'todo-list-item-view';

export default class TodoListView {
  /**
   * @param  {Element} element
   * @param  {TodoList} list
   */
  constructor(element, list) {
    this.element = element;
    this.list = list;

    this.renderTitle();
    this.renderItems();
  }

  renderTitle() {
    this.element.querySelector(`.todos__title`).innerText = this.list.title;
  }

  renderItems() {
    const ul = this.element.querySelector(`ul`);

    // Take the list items
    this.list.items.forEach((item) => {
      // Make an item view for each item
      const itemView = new ItemView(item);

      // Append item view to the ul
      ul.appendChild(itemView.element);
    });
  }
}
