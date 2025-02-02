import React, {useReducer} from 'react';
import reducer, {initialState} from '../reducers';
import './App.css';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { addOne, ADD_ONE, 
         applyNumber, APPLY_NUMBER, 
         changeOperation, CHANGE_OPERATION,
         clearDisplay, CLEAR_DISPLAY,
         setMemory, SET_MEMORY,
         changeTotal, CHANGE_TOTAL,
         clearMemory, CLEAR_MEMORY,
       } from '../actions';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddition = (number) => {
    dispatch(applyNumber(number))
  }

  const handleChange = (operator) => {
    dispatch(changeOperation(operator))
  }

  const handleClear = () => {
    dispatch(clearDisplay())
  }

  const handleSetMemory = () => {
    dispatch(setMemory())
  }

  const handleChangeTotal = () => {
    dispatch(changeTotal())
  }

  const handleClearMemory = () => {
    dispatch(clearMemory())
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick = {handleSetMemory} />
              <CalcButton value={"MR"} onClick = {handleChangeTotal} />
              <CalcButton value={"MC"} onClick= {handleClearMemory} />

            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleAddition(1)}/>
              <CalcButton value={2} onClick={() => handleAddition(2)}/>
              <CalcButton value={3} onClick={() => handleAddition(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleAddition(4)}/>
              <CalcButton value={5} onClick={() => handleAddition(5)}/>
              <CalcButton value={6} onClick={() => handleAddition(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleAddition(7)}/>
              <CalcButton value={8} onClick={() => handleAddition(8)}/>
              <CalcButton value={9} onClick={() => handleAddition(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleChange("+")}/>
              <CalcButton value={"*"} onClick={() => handleChange("*")}/>
              <CalcButton value={"-"} onClick={() => handleChange("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
