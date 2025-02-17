
import './App.css';
import VdmtClassComp from './components/VdmtClassComp';
import VdmtFuncComp from './components/VdmtFuncComp';
import VdmtJsxExpression from './components/VdmtJsxExpression';

function App() {
  return (
    <div className="container border mt-3 bg-white">
        <h1>Vu Do Minh Thanh - Lesson 3 ReactJS</h1>
        <VdmtJsxExpression />

        <hr/>

        <VdmtFuncComp/>

        <hr/>

        <VdmtClassComp/>
    </div>
  );
}

export default App;
