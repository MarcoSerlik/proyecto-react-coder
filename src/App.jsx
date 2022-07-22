import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (

    <div className='App'>
    
      <Navbar/>
  
      <ItemListContainer />
    
    </div>


  )
}

export default App
