document.addEventListener('DOMContentLoaded', function () {
    const habitList = JSON.parse(localStorage.getItem('habitList')) || [];
    let completedCount = 0;
    let incompleteCount = 0;

    habitList.forEach(habit => {
        if (habit.completed) {
            completedCount++;
        } else {
            incompleteCount++;
        }
    });

    document.getElementById('progressDisplay').innerHTML = `
        <p>Completed Tasks: ${completedCount}</p>
        <p>Incomplete Tasks: ${incompleteCount}</p>
    `;

    const points = parseInt(localStorage.getItem('points')) || 0;
    document.getElementById('pointsDisplay').textContent = `Current Points: ${points}`;
});
