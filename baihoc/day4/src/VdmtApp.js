import './App.css';
import VdmtClassComp from './Components/VdmtClassComp';
import VdmtFuncComp from './Components/VdmtFuncComp';
import VdmtFuncComp1 from './Components/VdmtFuncComp1';

function VdmtApp() {
  // Object
  const person = {
    name: "Minh Thanh",
    address: "Khu 25 Trung Cap Trieu Dinh",
    role: "thien tuong 1",
  };
  // Render
  return (
    <div className="container border mt-3">
        <h1>Demo Components - Props - State</h1>
        <hr/>
        <div className='alert alert-danger'>
          <VdmtFuncComp name="Minh Thanh" address="Khu 25 Trung cap trieu dinh" role="thien tuong 1"></VdmtFuncComp>
          <hr/>
          <VdmtFuncComp name="Minh Thanh" address="La Khe Ha Dong" role="Stu"></VdmtFuncComp>
        </div>
        <div className='alert alert-info'>
          <VdmtFuncComp1 renderInfo={person}></VdmtFuncComp1>
        </div>
        <VdmtClassComp />
        <VdmtClassComp renderName="Minh Thanh" renderPerson={person} />
    </div>
  );
}

export default VdmtApp;
