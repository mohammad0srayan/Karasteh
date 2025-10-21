import './App.css';
import {useRoutes} from "react-router-dom";
import routes from './Routes';
import Navbar from './Components/Navabar/Navbar';

function App() {

  const router = useRoutes(routes)

  return (
      <>
          <Navbar />

          {router}
      </>
  )
}

export default App;
