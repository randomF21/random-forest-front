import React from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registra los elementos necesarios
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

const EstratoSocioeconomicoChart = ({ data }) => {
    const chartData = {
        labels: Object.keys(data), // Etiquetas para los estratos
        datasets: [
            {
                label: 'Distribución por Estrato',
                data: Object.values(data), // Valores para cada estrato
                backgroundColor: '#36A2EB',
                borderColor: '#36A2EB',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Ocultar la leyenda
            },
            title: {
                display: true,
                text: 'Distribución por Estrato Socioeconómico',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Estrato Socioeconómico',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Cantidad',
                },
                beginAtZero: true,
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default EstratoSocioeconomicoChart;
