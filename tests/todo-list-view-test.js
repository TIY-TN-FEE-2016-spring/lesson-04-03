/* global require */

QUnit.module(`TodoListView`, () => {
  const TodoList = require(`todo-list`);
  const TodoListView = require(`todo-list-view`);

  function createTestElement() {
    const div = document.createElement(`div`);
    div.innerHTML = `
      <h2 class="todos__title"></h2>

      <ul class="todo-list"></ul>
    `;

    return div;
  }

  test(`it fills in the title`, (assert) => {
    const shopping = new TodoList(`Shopping`);
    const shoppingElement = createTestElement();
    const shoppingView = new TodoListView(shoppingElement, shopping);

    const homework = new TodoList(`Homework`);
    const homeworkElement = createTestElement();
    const homeworkView = new TodoListView(homeworkElement, homework);

    assert.equal(shoppingElement.querySelector(`.todos__title`).innerHTML, `Shopping`,
      `A TodoListView should fill in the title: shoppingView`);

    assert.equal(homeworkElement.querySelector(`.todos__title`).innerHTML, `Homework`,
      `A TodoListView should fill in the title: homeworkView`);
  });

  test(`it fills out todo items list`, (assert) => {
    const list = new TodoList(`Shopping`,
      [{ description: `Salad`, done: false }, { description: `Milk`, done: true }]);
    const element = createTestElement();
    const view = new TodoListView(element, list);

    assert.equal(element.querySelectorAll(`li`).length, 2,
      `A TodoListView should have li's for each item in the list`);
  });
});
