import Check from './images/check.gif';
import Coffee from './images/coffeeT.gif';
import All from './icons/all.png'
import Today from './icons/today.png'
import Upcoming from './icons/week.png'
import Important from './icons/important.png'
import Completed from './icons/completed.png'
import Projects from './icons/projects.png'
import Add from './icons/add.png'
import Plus from './icons/plus.png'
import {newDiv,newBtn} from './functions.js'

const sidebar = document.getElementById("sidebar");




(function header(){
    const header = document.getElementById("header");
    
    function right(){
        header.appendChild(newDiv("","rightHeader"))
        const rightHeader = document.querySelector(".rightHeader")
        const myIcon = new Image();
        myIcon.src = Check;
        myIcon.classList = ("icon")
        rightHeader.appendChild(myIcon);
        
    }

    function left(){
        header.appendChild(newDiv("","leftHeader"))
        const newButton = document.createElement("button")
        const loginIcon = new Image();
        loginIcon.src = Coffee;
        loginIcon.classList = ("coffee");
        newButton.appendChild(loginIcon);
        newButton.appendChild(newDiv("| Sign in with Google",""))
        newButton.classList = ("login")
        header.appendChild(newButton);
    }

    right();
    left();
})();


(function projDates(){
    
    sidebar.appendChild(newDiv("","dateNav"))
    const dateNav = document.querySelector(".dateNav");
        
    for(let i=0;i<5;i++){
        const dateArray = ["All","Today","Upcoming","Important","Completed"];
        const iconArray = [All,Today,Upcoming,Important,Completed]
        const myIcon = new Image();
        myIcon.src = iconArray[i];
        myIcon.classList = ("sideIcon");  
        dateNav.appendChild(newBtn(dateArray[i],"navigation",dateArray[i].toLowerCase()))
        const nav = document.getElementById(dateArray[i].toLowerCase());
        nav.appendChild(myIcon)
    }
})();


(function newProjects(){
    sidebar.appendChild(newDiv("","projects"));
    const projects = document.querySelector(".projects");
    const projIcon = new Image();
    projIcon.src = Projects
    projects.appendChild(newDiv("Projects","projectHeader"))
    const projHead = document.querySelector(".projectHeader")
    projHead.appendChild(projIcon) 
    const addIcon = new Image();
    addIcon.src = Add
    projects.appendChild(newBtn("Create new project","addProject"))
    const addProj = document.querySelector(".addProject")
    addProj.appendChild(addIcon)
})();

const newTask = (() => {
    const taskbar = document.getElementById("taskbar")
    const plusIcon = new Image();
    plusIcon.src = Plus;
    taskbar.appendChild(newBtn("Add task","taskAdd"))
    const taskAdd = document.querySelector(".taskAdd")
    taskAdd.appendChild(plusIcon)
})();
