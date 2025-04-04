import './App.css';
import { Route, BrowserRouter as Router,  Routes } from 'react-router-dom';
import VdmtHome from './vdmt_components/VdmtHome';
import VdmtNavBar from './vdmt_components/VdmtNavBar';
import VdmtListTask from './vdmt_components/VdmtListTask';
import VdmtFormTaskAdd from './vdmt_components/VdmtFormTaskAdd';
import VdmtFormTaskEdit from './vdmt_components/VdmtFormTaskEdit';

function VdmtApp() {
  return (
    <div className="App">
      <h1>Bài thi cuối học phần - Vũ Đỗ Minh Thành : 2310900099</h1>
      <Router>
        <VdmtNavBar/>
        <Routes>
          <Route path="/" element={<VdmtHome/>} />
          <Route path="/vdmt-task" element={<VdmtListTask/>} />
          <Route path="/vdmt-task-add" element={<VdmtFormTaskAdd/>} />
          <Route path="/vdmt-task-edit/:vdmtTaskId" element={<VdmtFormTaskEdit/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default VdmtApp;
