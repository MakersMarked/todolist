import { Project, ToDoItem } from './classes';
import{ newElement} from './index';
import { addProject, projectsLib,loadProjects, loadToDos } from './logic';
import datepicker from 'js-datepicker';
import {BodyHtml} from './todolib'



const ProjectModal = () => {
    const bodyContainer = document.querySelector('#body-container');
    function closeModal(){
        modal.style.display ='none'
        modal.remove();
    }
const modal = newElement('div', bodyContainer );
    modal.setAttribute('id', 'modal-container');
    modal.classList.add('modal');
    modal.style.display = 'block';

    const modalContent = newElement('div',modal);
    modalContent.classList.add('modal-content')
        
        const modalTitle = newElement('h3',modalContent);
            modalTitle.classList.add('modal-title');
            modalTitle.textContent = 'New Project';
        const close = newElement('span', modalTitle)
            close.classList.add('close');
            close.textContent = 'X';
            close.addEventListener('click', closeModal)
        const projectNameInput = newElement('input', modalContent);
            projectNameInput.classList.add('input');
            projectNameInput.placeholder = 'Name your Project';
        const btnDiv = newElement('div',modalContent)
            btnDiv.classList.add('btn')
            const addBtn = newElement('button',btnDiv);
            addBtn.textContent = 'Add Project';
            addBtn.addEventListener('click',() => {
                addProject(projectsLib, projectNameInput.value);
                closeModal();
                 loadProjects()
                console.log(projectsLib)
                // render()
            })
            const cancelBtn = newElement('button', btnDiv);
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click',closeModal)
}

const ToDoModal = (proj) => {
    const bodyContainer = document.querySelector('#body-container');
    function closeModal(){
        modal.style.display ='none';
        modal.remove();
    }
    const modal = newElement('div', bodyContainer );
    modal.setAttribute('id', 'modal-container');
    modal.classList.add('modal');
    modal.style.display = 'block';

    const modalContent = newElement('div',modal);
        modalContent.classList.add('modal-content')
        const close = newElement('span', modalContent)
            close.classList.add('close');
            close.textContent = 'X';
            close.addEventListener('click', closeModal)
        const modalTitle = newElement('h3',modalContent);
            modalTitle.classList.add('modal-title');
            modalTitle.textContent = 'New To-Do Item';
        const toDoNameInput = newElement('input', modalContent);
            toDoNameInput.classList.add('input');
            toDoNameInput.placeholder = 'Name your Project';
        const dueDate = newElement('input',modalContent);
            dueDate.classList.add('date')
            dueDate.type = 'text'
            const picker = datepicker('.date');
        const descriptInput = newElement('textarea',modalContent);
        const urgent = newElement('input', modalContent);
            urgent.type = 'checkbox';
        const btnDiv = newElement('div',modalContent)
            btnDiv.classList.add('btn')
            const addBtn = newElement('button',btnDiv);
            addBtn.textContent = 'Add To-Do Item';
            addBtn.addEventListener('click',() => {
                projectsLib[proj].addToDoItem(
                    toDoNameInput.value,
                    descriptInput.value,
                    dueDate.value,
                    urgent.value);
                loadToDos(proj);
                closeModal();
               
                console.log(projectsLib)
                console.log()
                // render()
            })
            const cancelBtn = newElement('button', btnDiv);
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click',closeModal)
}
export {ProjectModal, ToDoModal}