// todo-list-item-view

export default class TodoListItemView {
  constructor(todo) {
    this.todo = todo;
    this.element = document.createElement(`li`);

    const statusStr = this.getStatus();

    this.element.innerHTML = `
      <span class="todo-list-item__desc">${this.todo.description}</span>
      <button class="todo-list-item__status">${statusStr}</button>`;
  }

  getStatus() {
    if (this.todo.done) {
      return 'DONE';
    }

    return 'Mark Complete'
  }
}

/**
 * <li class="todo-list-item">
 *   <span class="todo-list-item__desc">${description}</span>
 *   <button>Mark Complete</button>
 * </li>
 */
