
// import axios from 'axios'
import About from './About'
import Display from './Display'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

	return (
		
		<>
	<BrowserRouter>
      <Routes>
        <Route path="/" element={<About />}/>
		<Route path="/display" element={<Display/>}/>
      </Routes>
    </BrowserRouter>	

</>
);
}

export default App;