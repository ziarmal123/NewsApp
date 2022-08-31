import './App.css';
import React, { Component,useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


const App =()=>{
  const [pageSize, setpageSize] = useState(15)
  const [progress, setprogress] = useState(0)
  const [apiKey, setapiKey] = useState(process.env.REACT_APP_NEWS_API)
  const [comingValue, setcomingValue] = useState()
  const setProgressa=(progress)=>{
    setprogress(progress)
  }
  const Valuefunction=(data)=>{
    setcomingValue(data)
  }
  // const checkda =()=>{ Search
  //   console.log(comingValue)
  // }
    return (
      <BrowserRouter>
      <div>
        
        <Navbar Valuefunction={Valuefunction}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
     
 
      <Routes>
       <Route path='/' exact  element={<News setProgress={setProgressa} apiKey={apiKey} key="general" sizep={pageSize} country='us' category='general'/> }/> 
       <Route path='/home' exact  element={<News setProgress={setProgressa} apiKey={apiKey} key="general2" sizep={9} country='us' category='general'/> }/> 
       <Route path='/entertainment' exact element={<News setProgress={setProgressa} apiKey={apiKey}  key="entertainment" sizep={9} country='us' category='entertainment'/> }/>
       <Route path='/sports' exact element={<News setProgress={setProgressa} sizep={9} apiKey={apiKey} key="sports"  country='us' category='sports'/> }/>
       <Route path='/business' exact element={<News setProgress={setProgressa} apiKey={apiKey} key='business' sizep={9} country='us' category='business'/> }/>
       <Route path='/science' exact element={<News setProgress={setProgressa} apiKey={apiKey} key='science' sizep={9} country='us' category='science'/> }/>
       <Route path='/technology' exact element={<News setProgress={setProgressa} apiKey={apiKey} key='technology' sizep={9} country='us' category='technology'/> }/>
       <Route path='/health' exact element={<News setProgress={setProgressa} apiKey={apiKey} key='health' sizep={9} country='us' category='health'/> }/>
      </Routes>
      
      </div>
      {/* <div>///////Search Function Button
          <button className='btn btn-primary' onClick={checkda}>Click</button>
        // </div> */} 
      </BrowserRouter>
    )
  
}

export default App;

