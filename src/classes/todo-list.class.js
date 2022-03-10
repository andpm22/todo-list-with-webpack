import {Todo} from '../classes/todo.class'
export class TodoList {
    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }
    nuevoTodo(todo){
        this.todos.push(todo);
        this.nuevoLocalStorage()
    }
    eliminarTodo(id){
        this.todos = this.todos.filter( todo => todo.id != id)
        this.nuevoLocalStorage()
    }
    marcarCompletado(id){
        for(const todo of this.todos){
            if (todo.id == id){
                todo.estatus = !todo.estatus;
                this.nuevoLocalStorage()
                break;
            }
        }
    }
    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.estatus)
        this.nuevoLocalStorage()
    }
    nuevoLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos))
    }
    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')): [];
        this.todos = this.todos.map(todo => Todo.deJsonAObj(todo) )
    }
}