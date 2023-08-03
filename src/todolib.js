import { newElement, projectsLib } from "./logic"
import { ToDoModal } from "./modal";


export const BodyHtml = (projectIndex) => {
    const project1 = projectsLib[projectIndex]
    const bodyContainer = document.querySelector('#body-container');
    bodyContainer.textContent = '';
    
    const projectTitleContainer = newElement('div', bodyContainer);
        projectTitleContainer.classList.add('project-title-container');
        const addItemBtn = newElement('button', projectTitleContainer);
            addItemBtn.textContent = '+ New To-do item';
            addItemBtn.addEventListener('click', (e) => {
                ToDoModal(projectIndex);
                // render()
            });
    const projectTitle = newElement('h2', projectTitleContainer);
        projectTitle.textContent = project1.title;
    
    const todoListContainer = newElement('div', bodyContainer);
        todoListContainer.setAttribute('id','todolist-container');
}