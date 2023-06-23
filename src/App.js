import React,{useState} from 'react';
import Search_image from './Components/Search_image';
import DisplayImage from './Components/DisplayImage';
import './App.css';

function App() {
  let [data,setData]=useState([]);
  return (
    <div className="App">
      <Search_image addImage={setData}/>
      <DisplayImage images={data}/>
    </div>
  );
}

export default App;
