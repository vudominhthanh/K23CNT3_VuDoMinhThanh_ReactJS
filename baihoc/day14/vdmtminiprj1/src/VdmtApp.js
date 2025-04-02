import './App.css';
import VdmtCreate from './Components/VdmtCreate';
import VdmtEdit from './Components/VdmtEdit';
import VdmtHome from './Components/VdmtHome';
import VdmtList from './Components/VdmtList';
import VdmtNarBar from './Components/VdmtNarBar';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'

function VdmtApp() {
  return (
    <div className="App">
      <h2>Vu Do Minh Thanh - Mini 1</h2>
      <Router>
        <VdmtNarBar/>
        <Routes>
          <Route path='/' element={<VdmtHome/>} />
          <Route path='/List' element={<VdmtList/>} />
          <Route path='/Create' element={<VdmtCreate/>} />
          <Route path='/edit/:id' element={<VdmtEdit/>} />
        </Routes>
      </Router>
      <hr />

    </div>
  );
}
export default VdmtApp;
