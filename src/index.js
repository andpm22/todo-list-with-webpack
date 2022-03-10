import './styles.css';
import {Todo, TodoList} from './classes'
import {crearTodoHtml} from './js/funciones'

export const todoList = new TodoList();
// const tarea = new Todo('Aprender JS');
// todoList.nuevoTodo(tarea);
// crearTodoHtml(tarea);

// localStorage.setItem('my-key', 'a1b2c3');

// setTimeout(()=>{
//     localStorage.removeItem('my-key');
// }, 1500)
todoList.todos.forEach(todo => {
    crearTodoHtml(todo)
});

console.log('todos: ', todoList.todos );