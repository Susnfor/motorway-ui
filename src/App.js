import React, { useEffect, useState } from 'react';
import './App.css';
// import Form from './Form';
import { Suspense, lazy } from 'react';

const Form = lazy(() => import('./Form'));

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  

  return (
    <div className='app'>
      <div className='cars-container'>

      {
        images && images.map(img => ( //maps every item in api to a div
          <div className="cars" key={img.id} >
            <img className="carImg" src={`${img.url}.jpg`} alt={`${img.alt_description}`}/>
            <div className='desc-container'>
            <img className="ppImg"src={`${img.user.profile_image}.webp`} alt='profile'/>
            <p>{`❤️${img.likes}`}</p>
            <p>{`${img.alt_description}`}</p>
            </div>
          </div>
        ))
      }
      </div>
      <Suspense fallback={<div>Loading...</div>}>
      <div className='form-container'>
        <Form/>
        </div>
        </Suspense>
    </div>
  );
}

export default App;
