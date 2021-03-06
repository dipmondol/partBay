const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Fender Liner', 'Headlights', 'Door Handle', 'Washer Reservoir', 'Tail Lamp', 'Mirror'],
        datasets: [{
            label: 'Parts Sale Progress',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 08)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive: true, 
    }
});

// polar Area chart
const polar = document.getElementById('myChartPolar').getContext('2d');
const myChartPolar = new Chart(polar, {
    type: 'polarArea',
    data: {
        labels: ['Fender Liner', 'Headlights', 'Door Handle', 'Washer Reservoir', 'Tail Lamp', 'Mirror'],
        datasets: [{
            label: '# of Votes',
            data: [1000, 761, 100, 600, 300, 800],
            backgroundColor: [
                'rgba(255, 99, 132, .8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 1
        }]
    },
    options: {
       responsive: true, 
    }
});