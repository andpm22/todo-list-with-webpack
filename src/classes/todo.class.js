export class Todo {
    static deJsonAObj({tarea,id,estatus,creado}){
        const tempTodo = new Todo(tarea)
        this.id =id;
        this.estatus = estatus;
        this.creado = creado;

        return tempTodo;
    }
    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.estatus = false;
        this.creado = new Date();
    }
    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}