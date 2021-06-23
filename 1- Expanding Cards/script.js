// To select all attribute having classname 'panel'
const panels = document.querySelectorAll('.panel');


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // below function is to remove all the active classes
        removeActiveClasses();
        // and add current panel with as an active class 
        panel.classList.add('active');
    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}





