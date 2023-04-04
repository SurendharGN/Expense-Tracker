import Card from "./components/Card"
import Main from './components/Main';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import History from "./pages/History";

function App() {
    
  return (
    <div className=" h-screen text-center">
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main/>}></Route>
                    <Route path='/History' element={<History/>}></Route>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
