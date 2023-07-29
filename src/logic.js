import { Project, ToDoItem } from "./classes"

const projectsLib = [];

function newElement(element, parentToAppend) {
    const create = document.createElement(element);
    parentToAppend.append(create);
    return create;
};

const getProjectTitles = (obj) =>{
    const titles = obj.map(x => x.title)
    return titles
}

const addProject = (libraryToAddTo,projectTitle) => {
    const tempNewProject = new Project(projectTitle)
    if (projectTitle  == ''){
        alert('You must enter a title')
        return
    }
        libraryToAddTo.push(tempNewProject)
    return tempNewProject
}

const addToDoItem = (ItemToAdd,ProjectToAddTo) => {
    const tempNewTodoItem = new ToDoItem(...ItemToAdd)
    ProjectToAddTo.toDoListLib.push(ItemToAdd);
    // render()'
    return tempNewTodoItem;
}
const loadProjects = () => {
    const mapProjects = projectsLib.map(projectfolder => {
        const pane = document.querySelector('#left-pane')
        const projectTile = newElement('div',pane);
            console.log('Projects:', projectfolder)
            projectTile.classList.add('project-tiles')
            projectTile.textContent = projectfolder.title;
            projectTile.addEventListener('click', ()=> {
                console.log(projectfolder.toDoListLib)
                // change body container content
            })
        })
        return mapProjects
};


export {newElement, getProjectTitles, addProject, addToDoItem, loadProjects, projectsLib}

// const test = addProject(projectsLib,'Test');
// const test2 = addProject(projectsLib,'test2');
// const testToDo1 = new ToDoItem('a','this is a test', new Date('05/20/2024'), 'urgent');
// const testToDo2 = new ToDoItem('b','this is a test', new Date('05/20/2024'), 'urgent');
// const testToDo3 = new ToDoItem('c','this is a test', new Date('05/20/2024'), 'urgent');
// test.addToDoItem(testToDo1,testToDo2,testToDo3)
// const testToDo4 = new ToDoItem('d','this is a test', new Date('05/20/2024'), 'urgent');
// const testToDo5 = new ToDoItem('e','this is a test', new Date('05/20/2024'), 'urgent');
// const testToDo6 = new ToDoItem('f','this is a test', new Date('05/20/2024'), 'urgent');
// test2.addToDoItem(testToDo4,testToDo5,testToDo6)
