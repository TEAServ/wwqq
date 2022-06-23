
//------------------------------------
//-------------------------------------------------
import './SensonrsCatBar_comp.css';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";


import Login_comp from '../Login_comp/Login_comp';
import Task_comp from '../Task_comp/Task_comp';

import { connect } from 'react-redux';
import { setHistoryObj, setMatchObj,setSensState } from '../store/actions';
import { centerData } from '../Data';
 class SensonrsCatBar_comp extends React.Component {
  state = {
activatedClass:["","","","","","","",""]
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
   // this.RecordHistory();

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
  //setSensState
  selectSensCat(e,s)
  {
    this.props.setSensState(s);
    var ss = ["","","","","","","",""]
    ss[s] = "ActivatedsideCatBarBtn"

    this.setState({
      activatedClass:ss
    });

  }

  render() {
    return (
      <>
      <div class="sideCatBarCont">

<div  className={`${this.state.activatedClass[0]} sideCatBarBtn`} onClick={(e)=>{this.selectSensCat(e,0)}}>
    <i class="fa-solid fa-droplet"></i>
</div>

<div className={`${this.state.activatedClass[1]} sideCatBarBtn`} onClick={(e)=>{this.selectSensCat(e,1)}}>
    <i class="fa-solid fa-temperature-high"></i>
</div>

<div className={`${this.state.activatedClass[2]} sideCatBarBtn`} onClick={(e)=>{this.selectSensCat(e,2)}}>
    <i class="fa-solid fa-video"></i>
</div>

<div className={`${this.state.activatedClass[3]} sideCatBarBtn`} onClick={(e)=>{this.selectSensCat(e,3)}}>
    <i class="fa-solid fa-gauge"></i>
</div>

<div className={`${this.state.activatedClass[4]} sideCatBarBtn`} onClick={(e)=>{this.selectSensCat(e,4)}}>
    <i class="fa-solid fa-bolt-lightning"></i>
</div>

<div className={`${this.state.activatedClass[5]} sideCatBarBtn`} onClick={(e)=>{this.selectSensCat(e,5)}}>
    <i class="fa-solid fa-c"></i><i class="fa-solid fa-o"></i><i class="fa-solid fa-2"></i>
</div>

<div className={`${this.state.activatedClass[6]} sideCatBarBtn`} onClick={(e)=>{this.selectSensCat(e,6)}}>
    <i class="fa-solid fa-people-group"></i>
</div>

<div className={`${this.state.activatedClass[7]} sideCatBarBtn`} onClick={(e)=>{this.selectSensCat(e,7)}}>
    <i class="fa-solid fa-bus"></i><i class="fa-solid fa-taxi"></i>
</div>


</div>
      
     
      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setHistoryObj, setMatchObj,setSensState})(SensonrsCatBar_comp);





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