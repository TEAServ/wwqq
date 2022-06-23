
//------------------------------------
//-------------------------------------------------
import './Home_comp.css';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";


import Login_comp from '../Login_comp/Login_comp';
import Task_comp from '../Task_comp/Task_comp';
import SensonrsCatBar_comp from '../SensonrsCatBar_comp/SensonrsCatBar_comp';
import SensonrsListBar_comp from '../SensonrsListBar_comp/SensonrsListBar_comp';
import SensonrsDetailsBar_comp from '../SensonrsDetailsBar_comp/SensonrsDetailsBar_comp';

import { connect } from 'react-redux';
import { setHistoryObj, setMatchObj } from '../store/actions';
import { centerData } from '../Data';
 class Home_comp extends React.Component {
  state = {

  };
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }
  componentDidMount()
  {
   // console.log(this.props.state.history);
  //  console.log(this.props);
    this.RecordHistory();

  }

  RecordHistory()
  {
    if (!this.props.state.history) {
      
      this.props.setHistoryObj(this.props.history)
    }
    else{
      
     // console.log(this.props);
    }
    this.props.setMatchObj(this.props.match)
  }


  render() {
    return (
      <>
      
      {/* <Login_comp /> */} 




      <div class="container-fluid PageContainer">
        <div class="row headerContainer">
          
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark navBarApp">
  <a class="navbar-brand" href="">TEAServ</a>

  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="">LiveTwin</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" disabled href="" >AssetManagement</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="">Issues</a>
    </li>
  </ul>
</nav>



        </div>
        <div class="row bodyContainer container-fluid">
            {/* <div class="col-1 containerOf0">.</div> */}
        <div class="col-3">
              <div className='row leftHandSideContainer'>
              <div class="col-2 containerOf0"><SensonrsCatBar_comp /></div>
              <div class="col-10 containerOf1"><SensonrsListBar_comp /></div>
              
            </div>

        </div>
            
            <div class="col-6 containerOf2">
            <div class="viewerWindowCont">
        <iframe class="viewerWindow" src="https://city-dt-viewer.vercel.app/" frameborder="0"></iframe>
      </div>
            </div>
            <div class="col-3 containerOf3"><SensonrsDetailsBar_comp /></div>
        </div>
    </div>


      {/* <div class="viewerWindowCont">
        <iframe class="viewerWindow" src="https://city-dt-viewer.vercel.app/" frameborder="0"></iframe>
      </div> */}

     
      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setHistoryObj, setMatchObj})(Home_comp);





// //------------------------------------
// //-------------------------------------------------
// import './Header_comp.css';
// //import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
// import ReactDOM from "react-dom";
// import React from "react";

// export default class Header_comp extends React.Component {
//   state = {

//   };
//   // constructor(props)
//   // {
   
//   //   super(props);
//   //   this.state={
//   //     complete : ""
//   //   };
//   // }


//   render() {
//     return (
//       <>

//       </>
//     );
//   }

  
// }