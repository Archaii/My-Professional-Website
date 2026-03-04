// Project 1: Student Management System - Interactive Demo
(function () {
    // Demo view switching
    const demoBtns = document.querySelectorAll('.demo-btn');
    const demoViews = document.querySelectorAll('.demo-view');

    demoBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const targetDemo = this.getAttribute('data-demo');

            // Remove active class from all buttons and views
            demoBtns.forEach(function (b) {
                b.classList.remove('active');
            });
            demoViews.forEach(function (v) {
                v.classList.remove('active');
            });

            // Add active class to clicked button and corresponding view
            this.classList.add('active');
            document.getElementById(targetDemo + '-view').classList.add('active');
        });
    });

    // Attendance tracking demo
    const attendanceCheckboxes = document.querySelectorAll('.attendance-card input[type="checkbox"]');
    const presentCount = document.getElementById('present-count');
    const attendanceRate = document.getElementById('attendance-rate');

    function updateAttendance() {
        const total = attendanceCheckboxes.length;
        const checked = document.querySelectorAll('.attendance-card input[type="checkbox"]:checked').length;
        const rate = Math.round((checked / total) * 100);

        if (presentCount) presentCount.textContent = checked;
        if (attendanceRate) attendanceRate.textContent = rate + '%';
    }

    attendanceCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', updateAttendance);
    });

    // Initialize attendance count
    updateAttendance();

    // Form submission demo
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function () {
            alert('Grade submitted successfully! (Demo only)');
        });
    }

    // Action button demo
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const row = this.closest('tr');
            const studentName = row.querySelector('td:nth-child(2)').textContent;
            alert('Viewing details for: ' + studentName + ' (Demo only)');
        });
    });
})();
