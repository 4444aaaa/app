// Buttons
const badButton = document.querySelector('.bad-box-button');
const thoughtButton = document.querySelector('.thought-box-button');
const goodButton = document.querySelector('.good-box-button');
const goldenButton = document.querySelector('.golden-box-button');

// All task boxes
const taskBoxes = document.querySelectorAll('.task-box');

let currentFilter = null; // track current filter

function toggleFilter(filter) {
    if (currentFilter === filter) {
        // Clear filter
        taskBoxes.forEach(box => box.style.display = '');
        currentFilter = null;
    } else {
        taskBoxes.forEach(box => {
            switch (filter) {
                case 'bad':
                    box.style.display = box.classList.contains('bad') ? '' : 'none';
                    break;
                case 'thought':
                    box.style.display = box.classList.contains('thought') ? '' : 'none';
                    break;
                case 'good':
                    // Only pure task-box (no other classes)
                    box.style.display = (box.classList.length === 1 && box.classList.contains('task-box')) ? '' : 'none';
                    break;
                case 'golden':
                    box.style.display = box.classList.contains('golden') ? '' : 'none';
                    break;
            }
        });
        currentFilter = filter;
    }
}

// Attach events
badButton.addEventListener('click', () => toggleFilter('bad'));
thoughtButton.addEventListener('click', () => toggleFilter('thought'));
goodButton.addEventListener('click', () => toggleFilter('good'));
goldenButton.addEventListener('click', () => toggleFilter('golden'));
