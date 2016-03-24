// todo-list-view


export default class TodoListView {
  /**
   * @param  {Element} element
   * @param  {TodoList} list
   */
  constructor(element, list) {
    this.element = element;
    this.list = list;

    this.renderTitle();
  }

  renderTitle() {
    this.element.querySelector(`.todos__title`).innerText = this.list.title;
  }
}
