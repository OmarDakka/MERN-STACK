import React, { useState } from 'react';
import './App.css';
import ButtonInfo from './components/ButtonInfo';
import Content from './components/Content';
import { Container } from './components/Styles';
import Tabs from './components/Tabs';


function App() {
  const [content, setContent] = useState({});
  return (
    <div className="App">
      <Container>
        <h1>Learn More about the Dojo</h1>
        <Tabs tabs={ButtonInfo} setContent={setContent}/>
        <Content data={content}/>
      </Container>
    </div>
  );
}

export default App;
