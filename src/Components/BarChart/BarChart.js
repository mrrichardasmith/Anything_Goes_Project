import React, { useState, useEffect, useRef } from 'react';
import './BarChart.css';
import Chartjs from 'chart.js/auto';


export default function BarChart(props)    {

    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    const chartConfig = {
        type: "bar",
        data: {
          labels: ["Money", "Competition", "Academic", "Cameraderie", "Career", "Perspective"],
          datasets: [
            {
              label: "Primary Motivation",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
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
          const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
          setChartInstance(newChartInstance);
        }
      }, [chartContainer]);
    
    
    return  (
        <div>
            <div>
                <canvas ref={chartContainer} />
            </div>
              <div className="button" type="submit" onClick={onButtonClick}>Change Data</div>
        </div>
    )
}