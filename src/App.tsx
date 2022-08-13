import './App.css';
import Home from './components/Home';
import UrlBox from './components/UrlBox';
function App() {
  return (
    <div className='bg-turquoise h-screen w-screen'>
      {/* <Home /> */}
      
      <div className="flex justify-center">
        <UrlBox />
      </div>
    </div>
  );
}

export default App;
