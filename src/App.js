import Income from './components/Income';
import Revenue from './components/Revenue';
import Tracker from './components/Tracker';
import './App.css';

function App() {
    
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-screen text-center">

        <div id="tracker" className="bg-white col-span-2">
            <Tracker/>
        </div>
        <div id="income" className="bg-zinc-100">
            <Income/>
        </div>

        <div id="expense" className="bg-zinc-100 border-l border-l-black">
            <Revenue/>
        </div>

        

    </div>
  );
}

export default App;
