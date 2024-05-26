import { useState } from 'react';
import './App.css';
import data from './data.js'
import Tour from './components/Tour.js';


const App = () => {
  const [tour, setTour]=useState(data)

  function removeTour(id) {
    const newTour= tour.filter(tour => tour.id !==id);
    setTour =(newTour);
  }

  return (
  
    <div>
    <Tour tour={tour} removeTour={removeTour}></Tour>
    </div>   
  
  );
}
export default App;