
//------------------------------------
//-------------------------------------------------
import './SensonrsListBar_comp.css';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";


import Login_comp from '../Login_comp/Login_comp';
import Task_comp from '../Task_comp/Task_comp';

import { connect } from 'react-redux';
import { setHistoryObj, setMatchObj } from '../store/actions';
import { centerData } from '../Data';
 class SensonrsListBar_comp extends React.Component {
  state = {
    sensStatee:-1,
    content:<>aaaa</>
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
  componentDidUpdate()
  {
   // this.ReturnRendered();
   if (this.state.sensStatee != this.props.state.sensState) {
    this.ReturnRendered();
    this.setState({sensStatee:this.props.state.sensState})
   }
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
ReturnRendered()
{
    if (this.props.state.sensState == 1) {
        this.setState({
            content:           <>
            <div class="sideListBarExternal">
 
 <div class="container-fluid"> 
     <div class="row">
 
         <div class="col-10">
             <div class="sideListBarTitle">Temperature Sensors</div>
         </div>
         
         <div class="col-2 backBtn"><div>
             {/* <i class="fas fa-arrow-left"></i> */}
         </div></div>
     </div>
 </div>
 
 <div class="sideListBarInternalCont">
     <input type="text" class="form-control SearchBox" id="dummyBox" placeholder="Search" name="searchBox" disabled="true" />
 <div class="sensorsCardCont">
     <div class="sideListBarCard container-fluid ActivatedsideListBarCard">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor T 1</span></div>
                 <div><span class="SensorID">id: 45647345378</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>31 °C</div>
             </div>
         </div>
     </div>
 
     <div class="sideListBarCard container-fluid">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusRed"><i class="fas fa-circle"></i></span>Sensor T 2</span></div>
                 <div><span class="SensorID">id: 45345383456</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>40 °C</div>
             </div>
         </div>
     </div>
 
     <div class="sideListBarCard container-fluid ">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor T 3</span></div>
                 <div><span class="SensorID">id: 4386454313</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>30 °C</div>
             </div>
         </div>
     </div>

     <div class="sideListBarCard container-fluid ">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor T 4</span></div>
                 <div><span class="SensorID">id: 785434883</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>28 °C</div>
             </div>
         </div>
     </div>

     <div class="sideListBarCard container-fluid ">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor T 5</span></div>
                 <div><span class="SensorID">id: 5464678645</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>32 °C</div>
             </div>
         </div>
     </div>

     <div class="sideListBarCard container-fluid ">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor T 6</span></div>
                 <div><span class="SensorID">id: 434567865</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>27 °C</div>
             </div>
         </div>
     </div>

     <div class="sideListBarCard container-fluid ">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor T 7</span></div>
                 <div><span class="SensorID">id: 43864537813</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>30 °C</div>
             </div>
         </div>
     </div>
 
 
 
 </div>
 </div>
 
 </div>
            </>
        });
        
    }else if (this.props.state.sensState ==0) {
        this.setState({content:<>
            <div class="sideListBarExternal">
 
 <div class="container-fluid"> 
     <div class="row">
 
         <div class="col-10">
             <div class="sideListBarTitle">Humidity Sensors</div>
         </div>
         
         <div class="col-2 backBtn"><div>
             {/* <i class="fas fa-arrow-left"></i> */}
         </div></div>
     </div>
 </div>
 
 <div class="sideListBarInternalCont">
     <input type="text" class="form-control SearchBox" id="dummyBox" placeholder="Search" name="searchBox" disabled="true" />
 <div class="sensorsCardCont">
     <div class="sideListBarCard container-fluid ActivatedsideListBarCard">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 1</span></div>
                 <div><span class="SensorID">id: 45647345378</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>50%</div>
             </div>
         </div>
     </div>
 
     <div class="sideListBarCard container-fluid">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 2</span></div>
                 <div><span class="SensorID">id: 45345383456</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>48%</div>
             </div>
         </div>
     </div>
 
     <div class="sideListBarCard container-fluid ">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 3</span></div>
                 <div><span class="SensorID">id: 4386454313</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>45%</div>
             </div>
         </div>
     </div>

     <div class="sideListBarCard container-fluid ">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 4</span></div>
                 <div><span class="SensorID">id: 785434883</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>52%</div>
             </div>
         </div>
     </div>

     <div class="sideListBarCard container-fluid ">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 5</span></div>
                 <div><span class="SensorID">id: 5464678645</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>55%</div>
             </div>
         </div>
     </div>

     <div class="sideListBarCard container-fluid ">
         <div class="row cardContentRow">
             <div class="col-8 cardLeftSide" >
                 <div><span class="SensorName"><span class="statusGreen"><i class="fas fa-circle"></i></span>Sensor H 6</span></div>
                 <div><span class="SensorID">id: 434567865</span></div>
             </div>
             <div class="col-4 cardRightSide">
             <div>43%</div>
             </div>
         </div>
     </div>


 
 
 
 </div>
 </div>
 
 </div>
            </>})

    }
    else if (this.props.state.sensState ==2) {
        this.setState({content:<>

            </>})
    }
    else if (this.props.state.sensState ==3) {
        this.setState({content:<>

            </>})
    }
    else if (this.props.state.sensState ==4) {
        this.setState({content:<>

            </>})
    }
    else if (this.props.state.sensState ==5) {
        this.setState({content:<>

            </>})
    }
    else if (this.props.state.sensState ==6) {
        this.setState({content:<>

            </>})
    }
    else if (this.props.state.sensState ==7) {
        this.setState({content:<>

            </>})
    }
    else {
        this.setState({content:<>
                aaaa
            </>})
    }
}

  render() {
    return (
      <>

{this.state.content}

     
      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setHistoryObj, setMatchObj})(SensonrsListBar_comp);





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