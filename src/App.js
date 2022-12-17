import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home'
import TopMenu from './components/TopMenu/TopMenu';
import News from './components/News/News'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='fontApp'>
      <TopMenu/>
      <Home/>
      <News/> 
    </div>



  );
}

export default App;
