import './App.css';
import { Greet } from './components/Greet'
import { Heading } from './components/Heading';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Oscar } from './components/Oscar';
import { Status } from './components/status';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Style } from './components/styleprops';

function App() {
  const personName = {
    first : 'Shivank',
    last : 'Goel'
  }//passing object as props

  const NameList = [
    {
      first : 'Shivank',
      last : 'Goel'
    },
    {
      first : 'Shiven',
      last : 'Aggarwal'
    },
    {
      first : 'Gaurav',
      last : 'Kumar'
    }
  ]//passing array of objects as props
  return (
    <div className="App">
      <Greet name="Shivank" messageCount={10} isLoggedIn={true}/>
      <Greet name="Anshul" isLoggedIn={true}/>
      <Person name = {personName} />{/* passing object as props */}
      <PersonList names = {NameList} />{/*passing array of objects as props*/}
      <Status status='loading' />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading> Oscar goes to Leonardo Discpario!</Heading>
      </Oscar>
      <Button 
      handleClick = {(text, event, id)=>{
        console.log(text, event, id)
      }}
      />{/*event props may be difficult to understand*/}
      <Input value=''/> {/*handleChange = {(event)=>console.log(event)}*/  /* No need to pass it as a prop, can be explained inside function also*/}
      <Style styles={{height : '60px' , width : '100px' , backgroundColor : 'blue', border : '1px solid black', padding : '10px'}}/>
    </div>
  );
}

export default App;
