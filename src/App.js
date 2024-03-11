// import './App.css';
import Adduser from './Component/Adduser';
import Alluser from './Component/Alluser';
import Codeforinterview from './Component/Codeforinterview';
import Edit from './Component/Edit';
import Navbar from './Component/Navbar';
import {
  BrowserRouter as Router, Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Navbar />} /> */}
          <Route path='/' element={<Codeforinterview />} />
          <Route path='/alluser' element={<Alluser />} />
          <Route path='/adduser' element={<Adduser />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
