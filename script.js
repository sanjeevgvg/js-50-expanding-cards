const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass(); // remove active class from all the panel
        panel.classList.add('active'); // add the active class
    });
})

const removeActiveClass = () => {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}