// todo-list-item.js
export default class TodoListItem {
  constructor(description, done = false) {
    this.description = description;
    this.done = done;
  }

  toggle() {
    if (this.done) {
      this.done = false;
    } else {
      this.done = true;
    }
  }
}
