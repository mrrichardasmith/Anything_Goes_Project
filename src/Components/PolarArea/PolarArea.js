import React, { useEffect, useState, useRef } from 'react';
import './PolarArea.css';

import Chartjs from 'chart.js/auto';

export default function PolarArea(props)    {

    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    const data = {
        // Change number of labels to test label positioning variation:
        // Including a multi-line label for testing
        labels: ["HTML", "CSS", "Javascript", "React", "Redux"],
        datasets: [
            {
                label: "1",
                data: [65, 59, 90, 81, 56, 55],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)"
                  ]
            },
            
        ]
    };
    
    const config = {
        type: 'polarArea',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Polar Area Chart'
            }
          }
        },
      };

      const updateDataset = (datasetIndex, newData) => {
        chartInstance.data.datasets[datasetIndex].data = newData;
        chartInstance.update();
      };

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

      useEffect(() => {
        if (chartContainer && chartContainer.current) {
          const newChartInstance = new Chartjs(chartContainer.current, config);
          setChartInstance(newChartInstance);
        }
      }, [chartContainer]);

    return(

        <div className="container">
            <div>
                <canvas ref={chartContainer} />
            </div>
              <div className="button" type="submit" onClick={onButtonClick}>Change Data</div>
        </div>
    )
}  