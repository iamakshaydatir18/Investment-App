
import Header from './components/Header/Header.jsx'
import UserInput from './components/UserInput.jsx/UserInput.jsx'
import Result from './components/Results/Result.jsx'
import {useState} from 'react';


function App() {

  const[newValue,setNewValue] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
});

const isValidInput = newValue.duration >=1;

function valueChnage(identifier,newvalue){
    setNewValue(prevInput =>{
        return{
            ...prevInput,
            [identifier]:+newvalue
        }
    }
    );
}

  return (<>
   <Header></Header>
   <UserInput onChange={valueChnage} newValue={newValue}></UserInput>
   {isValidInput?<Result userInput={newValue}></Result>:
   <p className="center" >Please Enter duration of year greater than zero.</p>}
    </>
  )
}

export default App
