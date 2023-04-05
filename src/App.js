import Card from "./components/Card"
import {Routes,Route} from 'react-router-dom'
import Main from './components/Main';
import History from "./pages/History";
import Income from "./pages/Income";
import Expense from"./pages/Expense"
function App() {
    
  return <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/History' element={<History/>}/>
    <Route path='/Income' element={<Income/>}></Route>
    <Route path='/Expense' element={<Expense/>}></Route>
  </Routes>
}

export default App;
