import { Project, ToDoItem } from "./classes"
import { ToDoModal } from "./modal";
import { BodyHtml } from "./todolib";

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

const loadProjects = () => {
    const pane = document.querySelector('#left-pane');
        pane.textContent = '';
        const mapProjects = projectsLib.map((projectFolder, index) => {
        const projectTile = newElement('div',pane);
            projectTile.setAttribute('data-project', index);
            projectTile.classList.add('project-tiles');
            projectTile.textContent = projectFolder.title;
            projectTile.addEventListener('click', (e)=> {
                BodyHtml(e.target.dataset.project);
                loadToDos(e.target.dataset.project);
                // ToDoModal(e.target.dataset.project);
                // change body container content
            })
        })
        return mapProjects
};
     const loadToDos = (projectIndex) => {
        const todoListContainer = document.querySelector('#todolist-container');
        const tempProj = projectsLib[projectIndex];
            todoListContainer.textContent = '';
        const toDoTile = tempProj.toDoListLib.map(item => {
        const toDoTile = newElement('div',todoListContainer);
            toDoTile.classList.add('todo-tile');
            const toDoTitle = newElement('div',toDoTile);
                toDoTitle.textContent = item.title;
                toDoTitle.setAttribute('id','todo-title')
            const dueDate = newElement('div',toDoTile);
                dueDate.textContent = (item.dueDate);
            const descript = newElement('div', toDoTile);
                descript.textContent = item.descript;
            // const checks = newElement('div',toDoTile);
            //     checks.
    })
    return toDoTile
}


export {newElement, getProjectTitles, addProject, loadProjects,loadToDos, projectsLib}
