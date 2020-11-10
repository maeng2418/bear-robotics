import Draggable from './Draggable'
import Box from './Box';

function App() {
  return (
    <div className="App">
      <Draggable>
        <Box>
          드래그 가능한 박스
        </Box>
      </Draggable>
    </div>
  );
}

export default App;
