import React from 'react';
import './App.css';
import Fetchdate from './component/Fetchdate';
import Greeting from './component/Greeting';
import Calc, { Calc2, Calc3 } from './component/Calc';
import Gamehtml from './component/SlotMach';
import LearnForm from './component/LearnForm';
import ToDoList from './component/ToDoList';
import IncDec from './component/IncDec';
import Accordion from './component/accordion/Accordion';
import Create from './component/ToDoSingle';
// import GoogleKeep from './component/GoogleKeep';
import CovidData from './component/CovidData';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-12 p-0">
            <CovidData />
            {/* <GoogleKeep /> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 p-5">
            <Fetchdate />
            <hr />
            <Calc />
            <hr />
            <Calc2 />
            <hr />
            <Calc3 />
          </div>
          <div className="col-lg-6 p-0">
            <LearnForm />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 p-0">
            <Accordion />
          </div>
          <div className="col-lg-6 p-0">
            <Greeting />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 p-0">
            <IncDec />
          </div>
          <div className="col-lg-6 p-0">
            <Gamehtml />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 p-0">
            <ToDoList />
          </div>
          <div className="col-lg-6 p-0">
            <Create />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
