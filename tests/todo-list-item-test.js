
/* global require */

QUnit.module(`TodoListItem`, () => {
  const TodoListItem = require(`todo-list-item`);

  test(`it has basic properties`, (assert) => {
    const itemOne = new TodoListItem(`milk`);
    const itemTwo = new TodoListItem(`bread`, true);

    assert.equal(itemOne.description, `milk`,
      `A TodoListItem should have a description`);
    assert.equal(itemTwo.description, `bread`,
      `A TodoListItem should have a customizable description`);

    assert.equal(itemOne.done, false,
      `A TodoListItem should start as not done`);
    assert.equal(itemTwo.done, true,
      `A TodoListItem can accept a done attribute in the constructor`);
  });
});
