import { useContext } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { UserContext } from './Context/AuthContext';
import AllRoutes from './Routes/AllRoutes';

function App() {
  const {theme} = useContext(UserContext);

  const light = {
    backgroundColor : 'white',
    color : 'black'
  }

  const dark = {
    backgroundColor : 'black',
    color : 'white'
  }

  return (
    <div className="App">
      <Navbar/>
      <div style={theme === 'light' ? light : dark}>
      <AllRoutes/>
      <Footer/> 
      </div>  
    </div>
  );
}

export default App;
