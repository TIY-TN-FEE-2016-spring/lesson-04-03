/* global require */

QUnit.module(`TodoListItemView`, () => {
  const TodoListItemView = require(`todo-list-item-view`);
  const TodoListItem = require(`todo-list-item`);

  test(`it can render a basic incomplete todo`, (assert) => {
    const saladTodo = new TodoListItem(`Salad`, false);
    const saladView = new TodoListItemView(saladTodo);

    const milkTodo = new TodoListItem(`Milk`, false);
    const milkView = new TodoListItemView(milkTodo);

    assert.equal(saladView.element.tagName, `LI`,
      `TodoListItemViews should be represented by a li tag`);
    assert.equal(saladView.element.querySelector(`.todo-list-item__desc`).innerText, `Salad`,
      `The description for a todo item should be filled in`);
    assert.equal(milkView.element.querySelector(`.todo-list-item__desc`).innerText, `Milk`,
      `The description for a todo item should be filled in based on the todo description`);
    assert.equal(milkView.element.querySelector(`.todo-list-item__status`).innerText, `Mark Complete`,
      `The description for a todo item status be filled in as "Mark Complete"`);
  });

  test(`it can render COMPLETED tasks`, (assert) => {
    const todo = new TodoListItem(`Salad`, true);
    const view = new TodoListItemView(todo);

    assert.equal(view.element.querySelector(`.todo-list-item__status`).innerText, `DONE`,
      `The status for a completed todo should be filled in as "DONE"`);
  });
});
