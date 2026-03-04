// Project 2: Data Structure Visualizer - Interactive Demo
(function () {
    const canvas = document.getElementById('array-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let array = [12, 45, 23, 67, 34];
    let animationSpeed = 5;

    // Set canvas size for responsive display
    function resizeCanvas() {
        const container = canvas.parentElement;
        canvas.width = Math.min(800, container.clientWidth - 40);
        canvas.height = 300;
        drawArray();
    }

    // Draw array visualization
    function drawArray() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (array.length === 0) {
            ctx.fillStyle = '#94a3b8';
            ctx.font = '16px Inter';
            ctx.textAlign = 'center';
            ctx.fillText('Array is empty. Add some values!', canvas.width / 2, canvas.height / 2);
            return;
        }

        const boxWidth = Math.min(80, (canvas.width - 40) / array.length - 10);
        const boxHeight = 60;
        const startX = (canvas.width - (boxWidth + 10) * array.length + 10) / 2;
        const startY = (canvas.height - boxHeight) / 2;

        array.forEach(function (value, index) {
            const x = startX + (boxWidth + 10) * index;
            const y = startY;

            // Draw box
            ctx.fillStyle = '#2563eb';
            ctx.fillRect(x, y, boxWidth, boxHeight);

            // Draw border
            ctx.strokeStyle = '#22d3ee';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, boxWidth, boxHeight);

            // Draw value
            ctx.fillStyle = '#e5e7eb';
            ctx.font = 'bold 18px Inter';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(value.toString(), x + boxWidth / 2, y + boxHeight / 2);

            // Draw index
            ctx.fillStyle = '#a5b4fc';
            ctx.font = '12px Inter';
            ctx.fillText('[' + index + ']', x + boxWidth / 2, y + boxHeight + 20);
        });
    }

    // Insert value
    document.getElementById('array-insert').addEventListener('click', function () {
        const input = document.getElementById('array-value');
        const value = parseInt(input.value);

        if (isNaN(value)) {
            updateOperation('Please enter a valid number', 'none');
            return;
        }

        if (array.length >= 10) {
            updateOperation('Array is full (max 10 elements)', 'none');
            return;
        }

        array.push(value);
        input.value = '';
        drawArray();
        updateOperation('Inserted ' + value + ' at index ' + (array.length - 1), 'Insert: O(1)');
    });

    // Delete last value
    document.getElementById('array-delete').addEventListener('click', function () {
        if (array.length === 0) {
            updateOperation('Array is empty', 'none');
            return;
        }

        const deleted = array.pop();
        drawArray();
        updateOperation('Deleted ' + deleted + ' from end', 'Delete: O(1)');
    });

    // Generate random array
    document.getElementById('array-random').addEventListener('click', function () {
        array = [];
        const count = Math.floor(Math.random() * 5) + 4;
        for (let i = 0; i < count; i++) {
            array.push(Math.floor(Math.random() * 90) + 10);
        }
        drawArray();
        updateOperation('Generated random array with ' + count + ' elements', 'none');
    });

    // Clear array
    document.getElementById('array-clear').addEventListener('click', function () {
        array = [];
        drawArray();
        updateOperation('Array cleared', 'none');
    });

    // Speed slider
    const speedSlider = document.getElementById('speed-slider');
    const speedLabel = document.getElementById('speed-label');

    speedSlider.addEventListener('input', function () {
        animationSpeed = parseInt(this.value);
        const labels = ['Very Slow', 'Slow', 'Slow', 'Medium', 'Medium', 'Medium', 'Fast', 'Fast', 'Very Fast', 'Instant'];
        speedLabel.textContent = labels[animationSpeed - 1];
    });

    // Update operation info
    function updateOperation(operation, complexity) {
        const opElement = document.getElementById('current-operation');
        const complexityElement = document.getElementById('complexity-info');

        if (opElement) opElement.textContent = operation;
        if (complexityElement) complexityElement.textContent = complexity;
    }

    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    updateOperation('Ready to visualize', 'Select an operation');
})();
