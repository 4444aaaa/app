const duplicateButton = document.getElementById('duplicateButton');
const container = document.querySelector('.container');

duplicateButton.addEventListener('click', () => {
    const clone = container.cloneNode(true);
    container.parentNode.appendChild(clone);

    addRemoveContainerListener(clone);
});

function addRemoveContainerListener(containerElement) {
    const removeBtn = containerElement.querySelector('.removeContainerBtn');
    removeBtn.addEventListener('click', () => {
        containerElement.remove(); 
    });
}

addRemoveContainerListener(container);
