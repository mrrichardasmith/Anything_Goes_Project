import React from 'react';
import './FakerData.css';

import faker from  'faker';

export default function FakerData(props)    {

    const image = faker.image.imageUrl();
    const object = faker.random.arrayElements();

    return(
    <div className="Container">
        <div class="grid-container">
            <div className="item1"><img src={image} alt="animal" /></div>
            <div className="item2">
                <ul className="profile">
                        <li>{faker.name.firstName()} {faker.name.lastName()}</li>
                        <li><img src={faker.image.avatar()} alt="avatar" /></li>
                        <li>{faker.name.jobTitle()}</li>
                        <li><p>{faker.name.jobDescriptor()}</p></li>
                        
                </ul>
            </div>
            <div className="item3"></div>  
            <div className="item4">4</div>
            <div className="item5">5</div>
            <div className="item6">6</div>  
        </div>
    </div>
    )
}