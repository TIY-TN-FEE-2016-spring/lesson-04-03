/* global require */

QUnit.module(`TodoList`, () => {
  const TodoList = require(`todo-list`);

  test(`it has basic properties`, (assert) => {
    const list = new TodoList();
    const listTwo = new TodoList(`Groceries`);

    assert.equal(list.title, `Shopping`,
      `A TodoList should have a title`);

    assert.equal(listTwo.title, `Groceries`,
      `A TodoList should have a title passed to the constructor`);

    assert.equal(list.items.length, 0,
      `A TodoList starts with an empty array of "items"`);
  });
});
