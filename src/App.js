import './App.css';
import React, { Component } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  constructor(){
    super();
    this.state={
      pageSize:15,
      progress:0,
      apiKey:process.env.REACT_APP_NEWS_API
    }
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
   
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
     
 
      <Routes>
       <Route path='/' exact  element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="general" sizep={this.state.pageSize} country='us' category='general'/> }/> 
       <Route path='/home' exact  element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="general2" sizep={9} country='us' category='general'/> }/> 
       <Route path='/entertainment' exact element={<News setProgress={this.setProgress} apiKey={this.state.apiKey}  key="entertainment" sizep={9} country='us' category='entertainment'/> }/>
       <Route path='/sports' exact element={<News setProgress={this.setProgress} sizep={9} apiKey={this.state.apiKey} key="sports"  country='us' category='sports'/> }/>
       <Route path='/business' exact element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='business' sizep={9} country='us' category='business'/> }/>
       <Route path='/science' exact element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='science' sizep={9} country='us' category='science'/> }/>
       <Route path='/technology' exact element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='technology' sizep={9} country='us' category='technology'/> }/>
       <Route path='/health' exact element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='health' sizep={9} country='us' category='health'/> }/>
      </Routes>
      
      </div>
      </BrowserRouter>
    )
  }
}


