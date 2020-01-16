
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [],
        legend: {
          display: false
        },
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'orange',
            borderColor: 'orange',
            data: [75]
        }]
    },
    options: {
      cutoutPercentage: 87,
      rotation: 2 * Math.PI,
      circumference: 1.5 * Math.PI
    }
});
