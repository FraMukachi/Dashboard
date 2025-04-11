// Bar Chart for Work Time
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
    labels: ['M', 'T', 'W', 'T', 'F'],
    datasets: [{
        label: 'Hours',
        data: [1.2, 2.4, 1.5, 0.8, 0.2],
        backgroundColor: '#f4c84b',
        borderRadius: 5
    }]
},
options: {
    plugins: {
        legend: { display: false }
    },
    scales: {
        y: { beginAtZero: true }
    }
    }
});

// Doughnut Chart for Time Tracker
const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
    labels: ['Tracked', 'Remaining'],
    datasets: [{
    data: [2.35, 7.65],
        backgroundColor: ['#f4c84b', '#eee'],
        borderWidth: 0
    }]
},
options: {
    cutout: '70%',
    plugins: { 
        legend: { display: false }
    }
}
});