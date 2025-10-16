import { BrowserRouter, Routes, Route } from 'react-router-dom';
// @ts-ignore 
import HomePage from './widgets';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomePage/>}  />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
