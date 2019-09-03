import React, {Component} from 'react';
import './App.css';
import Header from '../component/header/header';
import Reservation from '../component/reservation/reserve';
import Searchlist from '../component/reservation/searchlist';

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
      },
      showSearchList: false,
      lists : [
        { TrainName: 'Kaveri Express', TrainNumber: 12345 },
        { TrainName: 'Cheran Express', TrainNumber: 12345 },
        { TrainName: 'Verudavan Express', TrainNumber: 12345 },
        { TrainName: 'Lalbag Express', TrainNumber: 12345 }
      ]
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
    const showList = this.state.showSearchList;
    this.setState( {
      showSearchList: !showList
    })
  }

  render() {
    let lists = null;
    const listStyle = {
      marginTop: '12px'
    };

    if( this.state.showSearchList ) {
      lists = <Searchlist details = { this.state.lists} date = {'03-sept-2019'}/>
    }

    return ( 
      <div>
        <Header className = {App} appHeader = { this.state.appHeader }/><br/>
        <div>
          <Reservation  reservation = { this.state.reservation } change = { this.onChangeHandler }/>
          <button onClick = { this.onSearchHandler }> Search </button>
        </div>
        <div style = { listStyle }>
          { lists }
        </div>
      </div> 
    );
  }
}


export default App;
