import React, { useState, useEffect, useRef } from 'react';
import './RadarChart.css';
import Chartjs from 'chart.js/auto';


export default function RadarChart(props)  {

    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    const randomInt = () => Math.floor(Math.floor(Math.random()*(100-1+1)+1));

    const data = {
        // Change number of labels to test label positioning variation:
        // Including a multi-line label for testing
        labels: ["Eating", ["Drinking", "water"], "Sleeping", "Designing", "Coding", "Cycling"],
        datasets: [
            {
                label: "1",
                data: [65, 59, 90, 81, 56, 55],
                backgroundColor: 'rgba(153, 153, 255, 0.1)'
            },
            {
                label: "2",
                data: [28, 48, 40, 19, 96, 27],
                backgroundColor: 'rgba(255, 153, 153, 0.1)'
            }
        ]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      };

      const updateDataset = (datasetIndex, newData) => {
        chartInstance.data.datasets[datasetIndex].data = newData;
        chartInstance.update();
      };

      useEffect(() => {
        if (chartContainer && chartContainer.current) {
          const newChartInstance = new Chartjs(chartContainer.current, config);
          setChartInstance(newChartInstance);
        }
      }, [chartContainer]);

      const onButtonClick = () => {
        const data = [
            randomInt(),
            randomInt(),
            randomInt(),
            randomInt(),
            randomInt(),
            randomInt()
          ];
          updateDataset(0, data);
      };

      
    
    return  (
        <div className="container">
          <div>
            <canvas ref={chartContainer} />
          </div>
          <div className="button" type="submit" onClick={onButtonClick}>Change Data</div>
        </div>
    )
}