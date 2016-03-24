import TodoListItem from 'todo-list-item';

export default class TodoList {
  constructor(title = `Shopping`, startingItems = []) {
    this.title = title;
    // The items list should start empty
    this.items = [];

    // Loop through all of the passed in startingItems
    startingItems.forEach((item) => {
      // Add a new item with description and done
      this.addNewItem(item.description, item.done);
    });
  }

  addNewItem(description, done) {
    // Create a new items array
    this.items = [
      // Take all of the items from the old items array
      ...this.items,
      // Create a new TodoListItem
      new TodoListItem(description, done),
    ];
  }
}
