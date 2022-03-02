import React from 'react'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


  
function TheBarChart({datasets}) {
  const options = { 
    type: "bar",
    responsive: true,
    plugins: {
      title: {
        display: false,
        // text: 'Bar Chart',
      },
      legend: {
        position: "right",
        labels: {
          color: "#fff", 
          font: {
              size: 10
          }
        }
      }, 
    },
    scales: {
      x: {
        stacked: true, 
        ticks: {
          color: "#FFF", 
          font: {
              size: 12
          }
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 77000000,
        title: {
          display: true,
          text: 'CIRCULATING SUPPLY', 
          color:"#97DAF7", 
          font: {
              size: 18
          },
          padding:0
        },
        ticks: {
          color: "#FFF", 
          font: {
              size: 12
          },
          callback: function (value, index, values) {
           return value / 1e6 + "M";
            }
          }
        }
      },
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
    },
    layout: {
      padding: 0
    }
  };
   
  return <Bar options={options} data={datasets} />;
}
export default TheBarChart;
