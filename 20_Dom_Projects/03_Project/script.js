// variables 

const content = document.querySelectorAll('.container_content');

for(let i=0; i<content.length;i++){

    content[i].addEventListener('click', () => {
        content[i].classList.toggle('active');
    })
}