import React from 'react';
import Cardlist from './Cardlist';
import Searchfaces from './Searchfaces';
import { faces } from './faces';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      faces: faces,
      Searched: '' 
    }
  }

   onSearchChange = (event) =>{
     this.setState({Searched: event.target.value}); 
  }

  render() {
    const filteredFace = this.state.faces.filter((faces) =>{ 
    const output = faces.name.toLowerCase().includes(this.state.Searched.toLowerCase());
      return output;
    })
    return (
      <div className='tc'>
        <h1>What is your mood?</h1>
        <Searchfaces searchChange={this.onSearchChange} />
        <Cardlist faces={filteredFace}/>
      </div>
    );
  }
}

export default App;
