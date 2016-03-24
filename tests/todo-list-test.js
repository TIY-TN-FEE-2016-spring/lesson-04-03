/* global require */

QUnit.module(`TodoList`, () => {
  const TodoList = require(`todo-list`);
  const TodoListItem = require(`todo-list-item`);

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

  test(`it can add a new item to the list`, (assert) => {
    const list = new TodoList();

    assert.equal(list.items.length, 0,
      `A TodoList starts with an empty array of "items"`);

    list.addNewItem(`Milk`);

    assert.equal(list.items.length, 1,
      `A TodoList adds and item to the list using the "addNewItem" method`);
    assert.equal(list.items[0] instanceof TodoListItem, true,
      `Added todos should be instances of the TodoListItem class`);
    assert.equal(list.items[0].description, `Milk`,
      `The added todo should have the passed in description`);

    list.addNewItem(`Bread`, true);

    assert.equal(list.items.length, 2,
      `A TodoList adds and item to the list using the "addNewItem" method`);

    assert.equal(list.items[0].description, `Milk`,
      `The added todo should have the passed in description`);
    assert.equal(list.items[1].description, `Bread`,
      `The added todo should have the passed in description`);
    assert.equal(list.items[1].done, true,
      `The added todo should have the passed in done value`);
  });

  test(`it can start with an array of existing POJO todos`, (assert) => {
    const todos = [
      { description: `Eggs`, done: false },
      { description: `Bacon`, done: true },
      { description: `Tofo`, done: false },
    ];

    const list = new TodoList(`Shopping`, todos);

    assert.equal(list.items.length, 3,
      `The TodoList should start with the items passed to the constructor`);

    assert.equal(list.items[0] instanceof TodoListItem, true,
      `The items added to the list should be instances of TodoListItem`);

    assert.equal(list.items[1].done, true,
      `The items added should have the passed in doneness...`);
      assert.equal(list.items[2].description, `Tofo`,
        `The items added should have the passed in descriptions`);
  });
});
