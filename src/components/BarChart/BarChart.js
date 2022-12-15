import React, { useState } from 'react';
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


const BarChart = () => {
    const [easy, setEasy] = useState(40)    
    const [medium, metMedium] = useState(80)    
    const [hard, setHard] = useState(60)    
    
    return (
        <div>
            <div style={{ width: "500px", margin: "auto" }}>
                <Bar
                    data={{
                        labels: ['Easy', 'Medium', 'Hard'],
                        datasets: [{
                            label: '',
                            data: [20, 90, 30],
                            borderWidth: 1,
                            backgroundColor: ["green", "yellow", "red"]
                        }]
                    }}
                    options={{
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        maintainAspectRatio: false
                    }}
                    height={300}
                    width={500}
                />
            </div>
        </div>
    );
};

export default BarChart;