// رسم بياني 1
const ctx1 = document.getElementById('myChart').getContext('2d');
const myChart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['1 Dec', '8 Dec', '16 Dec', '31 Dec'],
    datasets: [{
      label: 'New comers',
      data: [120, 180, 90, 146],
      fill: true,
      backgroundColor: 'rgba(66, 165, 245, 0.2)',
      borderColor: 'rgba(66, 165, 245, 1)',
      tension: 0.4,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#42a5f5',
      pointRadius: 4,
      pointBorderColor: '#42a5f5',
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 2500,
      easing: 'easeInOutBounce',
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 200
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.raw} New Comers`;
          }
        }
      }
    }
  }
});

// رسم بياني 2
const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['1 Dec', '8 Dec', '16 Dec', '31 Dec'],
    datasets: [{
      label: 'Returning clients',
      data: [80, 130, 60, 120],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      tension: 0.4,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#ff6384',
      pointRadius: 4,
      pointBorderColor: '#ff6384',
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 2500,
      easing: 'easeInOutBounce',
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 200
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.raw} Returning clients`;
          }
        }
      }
    }
  }
});

// رسم بياني 3
const ctx3 = document.getElementById('chart3').getContext('2d');
const chart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['1 Dec', '8 Dec', '16 Dec', '31 Dec'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [50, 75, 100, 50],
        backgroundColor: 'rgba(128, 90, 213, 0.5)',
        borderColor: 'rgba(128, 90, 213, 1)',
        fill: true,
      },
      {
        label: 'Dataset 2',
        data: [30, 50, 70, 80],
        backgroundColor: 'rgba(126, 191, 101, 0.5)',
        borderColor: 'rgba(126, 191, 101, 1)',
        fill: true,
      },
      {
        label: 'Dataset 3',
        data: [20, 40, 60, 30],
        backgroundColor: 'rgba(250, 205, 127, 0.5)',
        borderColor: 'rgba(250, 205, 127, 1)',
        fill: true,
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

// رسم بياني 4
const ctx4 = document.getElementById('chart4').getContext('2d');
const chart4 = new Chart(ctx4, {
  type: 'line',
  data: {
    labels: ['1 Dec', '8 Dec', '16 Dec', '31 Dec'],
    datasets: [
      {
        label: 'Snake Line',
        data: [20, 50, 30, 80, 60],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  }
});
