// Only run this if we are on index.html
const container = document.querySelector('.task-container-all');
if (container) {
    // List all HTML files that contain tasks
    const taskFiles = [
        'exercise.html', 'room.html', 'dental.html', 'leagueoflegends.html',
        'technique.html', 'music.html', 'nutrition.html', 'bathroom.html',
        'grooming.html', 'vscode.html', 'html.html', 'css.html', 'js.html',
        'csharp.html', 'vim.html', 'terminal.html', 'nootropics.html', 'business.html',
        'groceries.html', 'chatgpt.html', 'application.html', 'cooking.html', 'social.html',
        'seo.html', 'sales.html', 'marketing.html'
    ]; 

    // Get saved state from localStorage
    // It will store an object where the key is a unique task ID and value is 'green' or ''
    let savedTasks = JSON.parse(localStorage.getItem('taskStates')) || {};

    taskFiles.forEach(file => {
        fetch(file)
            .then(response => response.text())
            .then(htmlString => {
                // Parse the HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = htmlString;

                // Select all .task-box elements
                const tasks = tempDiv.querySelectorAll('.task-box');

                tasks.forEach((task, index) => {
                    const clonedTask = task.cloneNode(true);

                    // Make it editablen
                    clonedTask.setAttribute('contenteditable', 'true');

                    // Give each task a unique ID based on the file and index
                    const taskId = `${file}-task-${index}`;
                    clonedTask.dataset.taskId = taskId;

                    // Apply saved color if it exists
                    if (savedTasks[taskId] === 'green') {
                        clonedTask.style.backgroundColor = 'green';
                    }

                    // Append to container
                    container.appendChild(clonedTask);

                    // Click listener to toggle green
                    clonedTask.addEventListener('click', () => {
                        // Toggle green/red
                        const isGreen = clonedTask.style.backgroundColor === 'green';
                        clonedTask.style.backgroundColor = isGreen ? 'rgb(255, 48, 48)' : 'green';

                        // Save state
                        savedTasks[taskId] = isGreen ? '' : 'green';
                        localStorage.setItem('taskStates', JSON.stringify(savedTasks));
                    });
                });
            })
            .catch(err => console.error(`Error loading tasks from ${file}:`, err));
    });
}
