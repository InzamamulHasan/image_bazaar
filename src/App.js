import React,{useState} from 'react';
import Search_image from './Components/Search_image';
import DisplayImage from './Components/DisplayImage';
import './App.css';

function App() {
  let [data,setData]=useState([]);
  let [pageCount,setPageCount]=useState(1);
  console.log(pageCount)
  return (
    <div className="App">
      <Search_image addImage={setData} c={pageCount}/>
      <DisplayImage images={data} setPageCount={setPageCount} count={pageCount}/>
    </div>
  );
}

export default App;
