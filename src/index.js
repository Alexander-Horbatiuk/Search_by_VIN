import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MuContextProvider} from './dataAttribute/variablesAttribute'
// import {HistoryContextForm} from './Components/Form/HistiryContextForm'
ReactDOM.render(
  <React.StrictMode>
      <MuContextProvider>
         {/*<HistoryContextForm>*/}
             <App />
         {/*</HistoryContextForm>*/}
      </MuContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
