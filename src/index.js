'use strict'
import { ToDoItem, Project } from './classes';
import { newElement, getProjectTitles, addProject, loadProjects, projectsLib } from './logic';
import {format } from 'date-fns';
import './style.css';
import { ProjectModal, ToDoModal } from './modal';

format(new Date(2023, 27, 7), 'MM/dd//yyyy');


const Html = (() => {
    const content = document.querySelector('#content');
    // Header content
        const hero = newElement('header', content);
            hero.setAttribute('id','hero-container');

            const title = newElement('h1',hero);
                title.textContent = 'To-Do List'

            const createProjBtn = newElement('button',hero);
                // createProjBtn.classList.add('project-tiles');
                createProjBtn.setAttribute('id','create-proj-btn')
                createProjBtn.textContent =  '+ New Project';
                createProjBtn.addEventListener('click', ()=> {
                    ProjectModal();
                });
            // Menu content(left-pane)
        const pane = newElement('div',content);
            pane.setAttribute('id', 'left-pane');
                //render()

            // body content(main content)
        const bodyContainer = newElement('div',content);
            bodyContainer.setAttribute('id','body-container');
        const todoListContainer = newElement('div', bodyContainer);
                todoListContainer.setAttribute('id','todolist-container');
            // Modal Content
})()

export {newElement}

