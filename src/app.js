// app
import TodoList from 'todo-list';
import TodoListView from 'todo-list-view';

export default function () {
  // Look up our todos from the server
  fetch(`http://tiy-tn-todos.herokuapp.com/todos`)
    // Wait for all of the text to come back from the server
    //   parse text from the server as JSON
    .then((response) => response.json())
    // Take the JSON parsed data
    .then((data) => {
      // Create a new TodoList
      const list = new TodoList(`Something`, data);
      // Show info from the list
      const listElement = document.querySelector(`.todos`);

      const view = new TodoListView(listElement, list);
    });
}
