let points = parseInt(localStorage.getItem('points')) || 0;
document.getElementById('pointsDisplay').textContent = `Current Points: ${points}`;

function addHabit() {
    const habitInput = document.getElementById('habitInput');
    const habit = habitInput.value.trim();
    if (habit) {
        const habitList = JSON.parse(localStorage.getItem('habitList')) || [];
        habitList.push({ name: habit, completed: false });
        localStorage.setItem('habitList', JSON.stringify(habitList));
        habitInput.value = ''; // Clear input after adding
        displayHabits();
    } else {
        alert('Please enter a habit.');
    }
}

function displayHabits() {
    const habitList = JSON.parse(localStorage.getItem('habitList')) || [];
    const habitListContainer = document.getElementById('habitList');
    habitListContainer.innerHTML = '';
    
    habitList.forEach((habit, index) => {
        const habitItem = document.createElement('div');
        habitItem.innerHTML = `
            <p>${habit.name}</p>
            <button onclick="completeHabit(${index})">Complete</button>
            <button onclick="deleteHabit(${index})">Delete</button>
        `;
        habitListContainer.appendChild(habitItem);
    });
}

function completeHabit(index) {
    const habitList = JSON.parse(localStorage.getItem('habitList')) || [];
    if (!habitList[index].completed) {
        habitList[index].completed = true;
        localStorage.setItem('habitList', JSON.stringify(habitList));
        points += 15;
        localStorage.setItem('points', points);
        document.getElementById('pointsDisplay').textContent = `Current Points: ${points}`;
        displayHabits();
    } else {
        alert('This habit is already marked as completed.');
    }
}

function deleteHabit(index) {
    const habitList = JSON.parse(localStorage.getItem('habitList')) || [];
    habitList.splice(index, 1);
    localStorage.setItem('habitList', JSON.stringify(habitList));
    displayHabits();
}

// Initial display of habits when the page loads
displayHabits();
