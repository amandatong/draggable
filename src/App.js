import './App.css';
import Draggable from './components/Draggable';
import Box from './components/Box';

function App() {

  return (
    <>
        <Draggable id="drag1">
            <Box/>
        </Draggable>
        <Draggable id="drag2">
            <Box/>
        </Draggable>
    </>
  );
}

export default App;
