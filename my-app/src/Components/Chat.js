import React from 'react';
import './Chat.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Pie, Radar, Doughnut } from 'react-chartjs-2';

// Register the chart components used
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const Chat = () => {

  //static data for all the charts
  const data = {
    fastestCars: {
      labels: ['LaFerrari', 'SF90 Stradale', 'F8 Tributo', '488 Pista', '812 Superfast'],
      datasets: [{
        label: 'Top Speed (mph)',
        data: [217, 211, 211, 211, 211],
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
      }],
    },
    raceWins: {
      labels: ['Monaco', 'Italian GP', 'British GP', 'Belgian GP', 'Singapore GP'],
      datasets: [{
        label: 'Number of Wins',
        data: [15, 19, 15, 18, 5],
        backgroundColor: [
          'rgba(2, 0, 0, 1)',
        ],
      }],
    },
    raceWins: {
      labels: ['Monaco', 'Italian GP', 'British GP', 'Belgian GP', 'Singapore GP'],
      
      datasets: [{
        label: 'Number of Wins',
        fill: true,
        data: [15, 19, 15, 18, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }],
    },
    carsManufactured: {
      labels: ['2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: 'Cars Manufactured',
        data: [8000, 8100, 8400, 9000, 9200],
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
      }],
    },
    revenue: {
      labels: ['2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: 'Revenue (in millions)',
        data: [2900, 3100, 3400, 3600, 4000],
        backgroundColor: 'rgba(255, 99, 132, 0.2)', 
        borderColor: 'rgba(255, 99, 132, 1)',       
        pointBackgroundColor: 'rgba(255, 99, 132, 1)', 
        pointBorderColor: '#fff',                     
        pointHoverBackgroundColor: '#fff',            
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
      }],
    },
    popularEngines: {
      labels: ['V8', 'V12', 'V6 Hybrid'],
      datasets: [{
        label: 'Number of Models',
        data: [5, 3, 2],
        backgroundColor: ['rgba(235, 0, 0, 0.8)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0.1)'],
      }],
    }
  };

  //options for all the charts
  // Options for the Fastest Cars Bar Chart
const fastestCarsOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Fastest Ferrari Models by Top Speed',
      color: 'antiquewhite',
    },
  },
};

// Options for the Race Wins Radar Chart
const raceWinsOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Ferrari Race Wins by Grand Prix',
      color: 'antiquewhite',
    },
  },
  scales: {
    r: {
      angleLines: {
        color: 'antiquewhite', 
      },
      grid: {
        color: 'antiquewhite', 
      },
      pointLabels: {
        color: 'antiquewhite', 
      },
    },
  },
};

// Options for the Cars Manufactured Doughnut Chart
const carsManufacturedOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Number of Ferraris Manufactured',
      color: 'antiquewhite',
    },
  },
};

// Options for the Revenue Line Chart
const revenueOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Ferrari Revenue Over the Years',
      color: 'antiquewhite',
    },
  },
};

// Options for the Popular Engines Pie Chart
const popularEnginesOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Popularity of Ferrari Engine Types',
      color: 'antiquewhite',
    },
  },
};



  return (
    <div className='outsidePageContainer'>
      <h1>Some stats about Ferrari</h1>
      <div className='chatPageContent'>
      
      
      <div className="chartContainerSpanThree"><Bar data={data.fastestCars} options={fastestCarsOptions} /></div>
      <div className="chartContainerSpanThree"><Line data={data.revenue} options={revenueOptions} /></div>
      <div className="chartContainerSpanTwo"><Pie data={data.popularEngines}  options={popularEnginesOptions}/></div>
      <div className="chartContainerSpanTwo"><Radar data={data.raceWins} options={raceWinsOptions} /></div>
      <div className="chartContainerSpanTwo"><Doughnut data={data.carsManufactured} options={carsManufacturedOptions} /></div>
      </div>
    </div>
    
  );
};

export default Chat;

