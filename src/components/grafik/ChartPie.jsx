"use client"

import { Doughnut, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartPie = ({ data, title, colors = {} }) => {
  // Default colors
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
        data: Object.values(data),
        backgroundColor: Object.keys(data).map(key => 
          colors[key] || defaultColors[key] || `hsl(${Math.random() * 360}, 70%, 60%)`
        ),
        borderColor: '#ffffff',
        borderWidth: 2,
        hoverBackgroundColor: Object.keys(data).map(key => 
          colors[key] || defaultColors[key] || `hsl(${Math.random() * 360}, 80%, 70%)`
        ),
        hoverBorderColor: '#ffffff',
        hoverBorderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    cutout: '50%', // Untuk donut chart, hapus untuk pie chart biasa
  };

  return (
    <div className="w-full h-64">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default ChartPie;