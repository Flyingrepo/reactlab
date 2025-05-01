import React from 'react';
import Header from './Header';
import Footer from './Footer'
import './App.css';

function App() {

    const title ="Welcome to My React App";
    const tagline ="Building great apps with React";
    const copyright="© 2025 MyReactApp. All rights reserved.";

return (
  <div className="App">
    <Header title ={title}/>
  <Footer tagline ={tagline} copyright={copyright}/>
  </div>


);
}
export default App;
