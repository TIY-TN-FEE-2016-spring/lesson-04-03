// todo-list-item-view

export default class TodoListItemView {
  constructor(todo) {
    this.todo = todo;
    this.element = document.createElement(`li`);

    this.element.innerHTML = `
      <span class="todo-list-item__desc"></span>
      <button class="todo-list-item__status"></button>`;
    this.render();

    this.element.querySelector(`.todo-list-item__status`).addEventListener(`click`, () => {
      // Change the todo status
      this.todo.toggle();

      this.render();
    });
  }

  render() {
    const statusButton = this.element.querySelector(`.todo-list-item__status`);
    this.element.querySelector(`.todo-list-item__desc`).innerText = this.todo.description;

    statusButton.innerText = this.getStatus();
    statusButton.classList.toggle(`todo-list-item__status--done`, this.todo.done);
  }

  getStatus() {
    if (this.todo.done) {
      return 'DONE';
    }

    return 'Mark Complete'
  }
}
