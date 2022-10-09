import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
   

<Router>

  <Routes>
    <Route exact path="/" element={<Screen1/>}/>
    <Route exact path="/Screen2" element={<Screen2/>}/>
    {/* <Route path="*" element={}/> */}
  </Routes>

</Router>
  );
}

export default App;