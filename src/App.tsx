import './App.css';
import Home from './components/Home';
import UrlBox from './components/UrlBox';

import Button from './components/Button';
import Playlist from './components/Playlist';
function App() {
  return (
    <div className='bg-turquoise h-screen w-screen'>
      {/* <Home /> */}
      
      <div className="flex justify-center">
        <UrlBox />
      </div>
      <div className="flex justify-center">
        <Button />
      </div>
      <div className="flex justify-center">
        <Playlist />

      </div>
      
    </div>
  );
}

export default App; 
