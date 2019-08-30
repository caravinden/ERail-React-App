import React, {Component} from 'react';
import './App.css';
import Header from '../component/header/header';
import Reservation from '../component/reservation/reserve';

class App extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      appHeader: 'Welcome to erail app',
      reservation : {
        From: 'Banglore',
        To: 'Chennai',
        Date: '30-aug-2019',
        Type: 'SL'
      }
    }
    this.onChangeHandler = this.onChangeHandler.bind( this);
  }
  onChangeHandler = ( id, event ) => {
    const key = id.key;
    const reservation = {...this.state.reservation };
    reservation[ key ] = event.target.value;

    this.setState( {  
      reservation : reservation
    })
  }
  onSearchHandler = () => {
    
  }

  render() {
    return ( 
      <div>
        <Header className = {App} appHeader = { this.state.appHeader }/><br/>
        <div>
          <Reservation  reservation = { this.state.reservation } change = { this.onChangeHandler }/>
          <button onClick = { this.onSearchHandler }> Search </button>
        </div>
      </div> 
    );
  }
}


export default App;
