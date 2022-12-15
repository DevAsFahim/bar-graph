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
import Form from '../Form/Form';

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
    const [medium, setMedium] = useState(80)    
    const [hard, setHard] = useState(60)    
    
    return (
        <div>
            <div className="graph_container">
                <Bar
                    data={{
                        labels: ['Easy', 'Medium', 'Hard'],
                        datasets: [{
                            label: '',
                            data: [easy, medium, hard],
                            borderWidth: 1,
                            backgroundColor: ["#0080006e", "#fffb003f", "#ff000069"]
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

            <Form 
                setEasy={setEasy}
                setMedium={setMedium}
                setHard={setHard}
            ></Form>
        </div>
    );
};

export default BarChart;