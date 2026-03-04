// Project 4: Task Management App - Interactive Demo
(function () {
    let draggedElement = null;

    // Task checkbox handling
    const taskCheckboxes = document.querySelectorAll('.task-checkbox');
    taskCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const taskCard = this.closest('.task-card');
            if (this.checked) {
                taskCard.classList.add('completed');
            } else {
                taskCard.classList.remove('completed');
            }
            updateStats();
        });
    });

    // Drag and Drop functionality
    const taskCards = document.querySelectorAll('.task-card[draggable="true"]');
    const taskLists = document.querySelectorAll('.task-list');

    taskCards.forEach(function (card) {
        card.addEventListener('dragstart', function (e) {
            draggedElement = this;
            this.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        });

        card.addEventListener('dragend', function () {
            this.classList.remove('dragging');
            // Remove drag-over class from all columns
            document.querySelectorAll('.task-column').forEach(function (col) {
                col.classList.remove('drag-over');
            });
            updateStats();
        });
    });

    taskLists.forEach(function (list) {
        list.addEventListener('dragover', function (e) {
            e.preventDefault();
            const column = this.closest('.task-column');
            column.classList.add('drag-over');
        });

        list.addEventListener('dragleave', function () {
            const column = this.closest('.task-column');
            column.classList.remove('drag-over');
        });

        list.addEventListener('drop', function (e) {
            e.preventDefault();
            if (draggedElement) {
                this.appendChild(draggedElement);
                
                // If moved to completed column, check the checkbox
                const column = this.closest('.task-column');
                if (column.getAttribute('data-status') === 'completed') {
                    const checkbox = draggedElement.querySelector('.task-checkbox');
                    if (checkbox) {
                        checkbox.checked = true;
                        draggedElement.classList.add('completed');
                    }
                } else {
                    const checkbox = draggedElement.querySelector('.task-checkbox');
                    if (checkbox) {
                        checkbox.checked = false;
                        draggedElement.classList.remove('completed');
                    }
                }
            }
            const column = this.closest('.task-column');
            column.classList.remove('drag-over');
        });
    });

    // Update statistics
    function updateStats() {
        const todoList = document.getElementById('todo-list');
        const progressList = document.getElementById('progress-list');
        const completedList = document.getElementById('completed-list');

        const todoCount = todoList ? todoList.querySelectorAll('.task-card').length : 0;
        const progressCount = progressList ? progressList.querySelectorAll('.task-card').length : 0;
        const completedCount = completedList ? completedList.querySelectorAll('.task-card').length : 0;

        const todoCountEl = document.getElementById('todo-count');
        const progressCountEl = document.getElementById('progress-count');
        const completedCountEl = document.getElementById('completed-count');

        if (todoCountEl) todoCountEl.textContent = todoCount;
        if (progressCountEl) progressCountEl.textContent = progressCount;
        if (completedCountEl) completedCountEl.textContent = completedCount;

        // Update stats at bottom
        const totalTasks = todoCount + progressCount + completedCount;
        const completionRate = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
        
        const allTasks = document.querySelectorAll('.task-card');
        let highPriorityCount = 0;
        allTasks.forEach(function (task) {
            if (task.getAttribute('data-priority') === 'high') {
                highPriorityCount++;
            }
        });

        const statItems = document.querySelectorAll('.demo-stats .stat-item');
        if (statItems[0]) {
            statItems[0].querySelector('.stat-value').textContent = totalTasks;
        }
        if (statItems[1]) {
            statItems[1].querySelector('.stat-value').textContent = completionRate + '%';
        }
        if (statItems[2]) {
            statItems[2].querySelector('.stat-value').textContent = highPriorityCount;
        }
    }

    // Add task button
    const addTaskBtn = document.getElementById('add-task-btn');
    if (addTaskBtn) {
        addTaskBtn.addEventListener('click', function () {
            alert('Add Task feature (Demo only)\n\nIn the full app, this would open a form to create a new task with:\n- Title and description\n- Priority level\n- Due date\n- Category/tags');
        });
    }

    // Filter select
    const filterSelect = document.getElementById('filter-select');
    if (filterSelect) {
        filterSelect.addEventListener('change', function () {
            const selectedFilter = this.value;
            alert('Filtering by: ' + selectedFilter + '\n\n(Demo only - In the full app, this would filter visible tasks)');
        });
    }

    // Initialize stats
    updateStats();

    // Add hover effect to task cards
    const allTaskCards = document.querySelectorAll('.task-card');
    allTaskCards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            this.style.borderColor = '#3b82f6';
        });

        card.addEventListener('mouseleave', function () {
            this.style.borderColor = '#1f2937';
        });
    });

    // Smooth animations for newly added elements
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node.classList && node.classList.contains('task-card')) {
                    node.style.opacity = '0';
                    node.style.transform = 'translateY(20px)';
                    
                    setTimeout(function () {
                        node.style.transition = 'all 0.3s ease';
                        node.style.opacity = '1';
                        node.style.transform = 'translateY(0)';
                    }, 10);
                }
            });
        });
    });

    taskLists.forEach(function (list) {
        observer.observe(list, { childList: true });
    });
})();
