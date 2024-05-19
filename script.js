function scroll(select, i = 0){
    const element = document.querySelectorAll(select);
    if(element.length > i){
        element[i].scrollIntoView({ behavior: 'smooth'});
    }
}

let projects = document.getElementById("projects");
let socials = document.getElementById("socials");

home.addEventListener('click', () =>{
    scroll('.content');
});

projects.addEventListener('click', () =>{
    scroll('.header');
});

socials.addEventListener('click', () =>{
    scroll('.line-through');
});