import React from 'react';
import './Charts.css';

import BarChart from '../BarChart/BarChart';
import PolarArea from '../PolarArea/PolarArea';
import RadarChart from '../RadarChart/RadarChart';

export default function Charts(props)   {
    return  (
        <div className="container">
            
            <div className="row">
                <PolarArea />
                <RadarChart />
            </div>
            <div>
                <BarChart />
            </div>

        </div>
    
    )
}