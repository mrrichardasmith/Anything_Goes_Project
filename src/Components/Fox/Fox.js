import React, { useState, useEffect } from "react";
import './Fox.css'


export default function Fox(props)  {

  const [pic1, setPic1] = useState('');
  const [pic2, setPic2] = useState(''); 
  const [pic3, setPic3] = useState('');

  function changeFox(picture)  {
    console.log('fox fetch fired')
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://randomfox.ca/floof/", requestOptions)
      //parse into a javascript object
      .then(response => response.json())
      .then(
        result => {
          //Destructure image from object
          const { image } = result;
          if(picture === "pic1")  {
            setPic1(image);
          } else if (picture === "pic2") {
            setPic2(image);
          } else  {
            setPic3(image);
          }
          }
        ).catch(error => console.log('error', error));
      }

      useEffect(() => {
        changeFox('pic1');
        changeFox('pic2');
        changeFox('pic3');
      }, [])

      function change(event)  {
        changeFox(event.target.value)
        } 
    
    return(
        <div className="row">
            <div className="image">
                <img className="picture" src={pic1} alt="fox" />
                <div className="next">
                    <button value="pic1" onClick={change}>Change</button>
                </div>
            </div>
            <div className="image">
                <img className="picture" src={pic2} alt="fox" />
                <div className="next">
                    <button value="pic2" onClick={change}>Change</button>
                </div>
            </div>
            <div className="image">
                <img className="picture" src={pic3} alt="fox" />
                <div className="next">
                    <button value="pic3" onClick={change}>Change</button>
                </div>
            </div>
        </div>
    )
}
