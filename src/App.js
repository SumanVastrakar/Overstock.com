import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllRoutes from './components/AllRoutes';
import { Footer } from './Pages/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
 <AllRoutes/>
 <Footer/>
    </div>
  );
}

export default App;
