
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { stat } from 'fs';
import Dialogbox from './dialogbox';
import EmpTableData from './empTableData';

function App(props) {
  const [state, setState] = useState({
    showForm: false,
    tableData: []
  })
  const _getForm = (event)=> {
    setState({
      ...state,
      showForm: true
    });
  }

  const onSubmit = data => {
    let dt = state.tableData;
    dt.push(data)
    setState({
      ...state,
      tableData: dt,
      showForm: false,
    });
  }

const onClear = index => {
  let dt = state.tableData;
  dt.splice(index, 1);
  setState({
    ...state,
    tableData: dt
  });
}

    return (
      <div className="container">
        <button className="button" onClick={_getForm} ><span>New Eployee </span></button>
         <Dialogbox
          open={state.showForm}
          onClose={() => setState({...state,showForm: false})}
          onSubmit={(data) => onSubmit(data)}
         />
         <EmpTableData 
             setEmpData={state.tableData}
             onClear={(index) => onClear(index)}
            />  
      </div>
    );
  }
export default App;
