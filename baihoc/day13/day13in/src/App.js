import './App.css';
import VdmtRealApi from './Components/vdmtRealApi';

function App() {
  return (
    <div className="App">
        <h2>Hello </h2>
        <hr/>
        <VdmtRealApi />
        <hr/>
        <VdmtReadMockApin />
        <hr/>
        <CreateMockApi/>
    </div>
  );
}

export default App;
