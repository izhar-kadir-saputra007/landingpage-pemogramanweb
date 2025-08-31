"use client"

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartBar = ({ data, title, colors = {} }) => {
  const defaultColors = {
    'layak': '#10B981',
    'tidak layak': '#EF4444',
    'miskin': '#EF4444',
    'menengah': '#F59E0B',
    'atas': '#10B981',
    'Laki-laki': '#3B82F6',
    'Perempuan': '#EC4899',
    'SD': '#EF4444',
    'SMP': '#F59E0B',
    'SMA': '#10B981',
    'D3': '#3B82F6',
    'S1': '#8B5CF6',
    'Sarjana': '#8B5CF6'
  };

  const chartData = {
    labels: Object.keys(data).map(key => key.charAt(0).toUpperCase() + key.slice(1)),
    datasets: [
      {
        label: 'Jumlah',
        data: Object.values(data),
        backgroundColor: Object.keys(data).map(key => 
          colors[key] || defaultColors[key] || `hsl(${Math.random() * 360}, 70%, 60%)`
        ),
        borderColor: Object.keys(data).map(key => 
          colors[key] || defaultColors[key] || `hsl(${Math.random() * 360}, 70%, 60%)`
        ),
        borderWidth: 1,
        hoverBackgroundColor: Object.keys(data).map(key => 
          colors[key] || defaultColors[key] || `hsl(${Math.random() * 360}, 80%, 70%)`
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    },
  };

  return (
    <div className="w-full h-64">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartBar;