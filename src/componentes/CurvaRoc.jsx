import React from 'react';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Registrar los elementos necesarios
ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
);

const CurvaROC = ({ rocData }) => {
    if (!rocData) {
        return <p>Cargando curva ROC...</p>;
    }

    const data = {
        labels: rocData.fpr, // FPR como etiquetas del eje X
        datasets: [
            {
                label: 'Curva ROC',
                data: rocData.tpr, // TPR como valores del eje Y
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Curva ROC (AUC: ${rocData.auc.toFixed(2)})`,
                font: {
                    size: 20,
                },
                color: 'black',
                padding: {
                    bottom: 20,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Tasa de Falsos Positivos (FPR)',
                },
                type: 'linear', // Usa una escala lineal en lugar de "category"
            },
            y: {
                title: {
                    display: true,
                    text: 'Tasa de Verdaderos Positivos (TPR)',
                },
                min: 0,
                max: 1,
            },
        },
    };

    return <Line data={data} options={options} height={310} width={500} />;
};

export default CurvaROC;
