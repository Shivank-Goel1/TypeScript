import './App.css';
import { Counter } from './components/Counter';
import { LoggedIn } from './components/Loggedin';
import { UserContextProvider } from './components/UserContext';
import { User2 } from './components/User2'
import { User } from './components/User';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';

function App() {
  return (
    <div className="App">
      <LoggedIn/>
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User2 />
      </UserContextProvider>
    </div>
  );
}

export default App;
