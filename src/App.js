import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import AddIcon from '@material-ui/icons/Add';
import './App.css';
import { Typography, Fab } from '@material-ui/core';
import SpacingGrid from './Grids';
import CenteredTabs from './CenteredTabs';

function App() {

  const [ notesArr, setNotesArr ] = useState([]);
  const [ cNotesArr, setCNotesArr ] = useState([]);
  const [tab, setTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  useEffect(() => {
     console.log(tab)
  }, [tab])

  const addNote = () => {
    if (notesArr.length === 0){
      setNotesArr([ 0 ]);
      return;
    }
    setNotesArr([...notesArr, notesArr[notesArr.length - 1] + 1]);
  }

  const deduceNotes = () => {
    switch(tab){
      case 0:
        return (
          <div style={{ padding: 20 }}>
            <Typography variant="h6" style={{ textAlign: 'center'}}>
              Personalized
            </Typography><br />
            <SpacingGrid notesArr={notesArr}/>
          </div>
        );
      case 1: 
          return (
            <div style={{ padding: 20 }}>
              <Typography variant="h6" style={{ textAlign: 'center'}}>
                Centralized
              </Typography><br />
              <SpacingGrid notesArr={cNotesArr}/>
            </div>
          );
      default: 
          return (
            <div style={{ padding: 20 }}>
              <Typography variant="h6" style={{ textAlign: 'center'}}>
                Personalized
              </Typography><br />
              <SpacingGrid notesArr={notesArr}/>
          </div>
          )
    }
  }



  return (
    <div className="App">
      <br />
      <Typography variant="h4" style={{ textAlign: 'center'}}>
        Sticky Notes
      </Typography>
      <Typography style={{ textAlign: 'center', paddingRight: 30, paddingLeft: 30 }}>
        The app features basic React.js functionality, including Components, Props, Event Handling, and States.Users can Add, Save, Edit/Update, and Remove notes.
      </Typography>

      <div>
        <CenteredTabs value={tab} setValue={setTab} handleChange={handleChangeTab}/>
      </div>

      <Fab onClick={addNote} color="primary" aria-label="add" style={{ position: 'fixed', bottom: 10, right: 10}}>
        <AddIcon />
      </Fab>

      {deduceNotes()}
      
    </div>
  );
}

export default App;
