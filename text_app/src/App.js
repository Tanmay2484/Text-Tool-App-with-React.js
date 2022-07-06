import './App.css';
import Navbar from './Navbar';
import Textarea from './Textarea';

function App(){
  return(<>
  <Navbar title="Text-App"/>
  <div className='container my-5'>
  <Textarea heading='Enter the text to analyze'/>
  </div>
  </>
  );
}
export default App;

