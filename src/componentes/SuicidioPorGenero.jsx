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

const SuicidioPorGenero = ({ data }) => {
    if (!data || typeof data !== 'object') {
        return <div>No hay datos disponibles</div>;
      }
      
    const chartData = {
        labels: Object.keys(data), // Etiquetas (géneros)
        datasets: [
            {
                label: 'Tasa de Suicidio',
                data: Object.values(data), // Valores correspondientes
                backgroundColor: ['#FF6384', '#36A2EB'], // Colores de las barras
                borderColor: ['#FF6384', '#36A2EB'], // Bordes de las barras
                borderWidth: 1, // Grosor del borde
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
                text: 'Tasa de Suicidio por Género',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Género',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Tasa de Suicidio',
                },
                beginAtZero: true, // Iniciar desde 0
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default SuicidioPorGenero;
