const chartData = {
  labels: ['學科力', '專心度', '理解度', '反應力', '參與度'],
  datasets: [{
    label: '學生能力',
    data: [60, 60, 60, 60, 60], // Default values
    fill: true,
    backgroundColor: 'rgba(135, 206, 250, 0.2)',
    borderColor: 'rgba(0, 123, 255, 1)',
    pointBackgroundColor: 'rgba(0, 123, 255, 1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(0, 123, 255, 1)'
  }]
};

const ctx = document.getElementById('radarChart').getContext('2d');
const radarChart = new Chart(ctx, {
  type: 'radar',
  data: chartData,
  options: {
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100,
        pointLabels: {
          font: {
            size: 14 // Adjust font size as needed
          }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14 // Adjust legend font size as needed
          }
        }
      }
    },
    elements: {
      line: {
        borderWidth: 3
      }
    }
  }
});


function updateChartData() {
  radarChart.data.datasets[0].data = Array.from(document.querySelectorAll('.dropdown'), dropdown => mapDropdownValue(dropdown.value));
  radarChart.update();
}

function mapDropdownValue(value) {
  const mapping = {
    'excellent': 100,
    'good': 80,
    'average': 60,
    'improve': 40,
    'needsWork': 20
  };
  return mapping[value] || 0;
}

document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('change', updateChartData);
});
