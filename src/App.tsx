import './App.css';
import Home from './components/Home';
import UrlBox from './components/UrlBox';

import Button from './components/Button';
import Playlist from './components/Playlist';

import {AudioProvider} from './context/AudioContext'
function App() {
  return (
    <AudioProvider>
    <div className='bg-turquoise h-screen w-screen'>
      
      
      <UrlBox />
      <div className="flex justify-center">
      <Playlist />
      </div>

    </div>
    </AudioProvider>
  );
}

export default App; 
