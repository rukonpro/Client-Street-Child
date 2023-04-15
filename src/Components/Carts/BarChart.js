import React from 'react';
import {Bar} from 'react-chartjs-2';


const BarChart = ({chartData}) => {
    return (
        <div>
            <Bar data={chartData}/>
        </div>
    );
};

export default BarChart;