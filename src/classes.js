import { projectsLib } from "./logic";

export class Project {
    constructor(title){
        this.title = title;
        this.toDoListLib = [];
    };
    get title() {
            return this._title
        }
    set title(newTitle){
        this._title = newTitle
    }

    addToDoItem (title, descript,dueDate,urgent) {
        const tempNewTodoItem = new ToDoItem(title,descript,dueDate,urgent);
        this.toDoListLib.push(tempNewTodoItem);
        // render()'
        return tempNewTodoItem
    };
    rmvToDoItem (ItemToDelete) {this.toDoListLib.splice(ItemToDelete, 1)};
};

export class ToDoItem{
    constructor(title,descript,dueDate,urgent){
        this.title = title;
        this.descript = descript;
        this.dueDate = dueDate;
        this.urgent = urgent;
        this.completed = false;
    }
};