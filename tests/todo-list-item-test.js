
/* global require */

QUnit.module(`TodoListItem`, () => {
  const TodoListItem = require(`todo-list-item`);

  test(`it has basic properties`, (assert) => {
    // Setup: Getting things ready
    const itemOne = new TodoListItem(`milk`);
    const itemTwo = new TodoListItem(`bread`, true);

    // Assertions: Testing the results of our work
    assert.equal(itemOne.description, `milk`,
      `A TodoListItem should have a description`);
    assert.equal(itemTwo.description, `bread`,
      `A TodoListItem should have a customizable description`);

    assert.equal(itemOne.done, false,
      `A TodoListItem should start as not done`);
    assert.equal(itemTwo.done, true,
      `A TodoListItem can accept a done attribute in the constructor`);
  });

  test(`it can toggle`, (assert) => {
    // Setup: Getting things ready
    const itemOne = new TodoListItem(`milk`);

    // Actions: Call any needed methods or functions
    itemOne.toggle();

    // Assertions: Testing the results of our work
    assert.equal(itemOne.done, true,
      `After toggling itemOne.done should be true`);

    itemOne.toggle();

    assert.equal(itemOne.done, false,
      `After toggling twice itemOne.done should be false`);
  });
});
