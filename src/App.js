
import './App.css';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';
import Navbar from './Navbar';

function App() {
  const {loading} = useGlobalContext()

  if(loading){
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div>
      <Navbar />
      <CartContainer />
         </div>
  );
}

export default App;
