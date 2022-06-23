
//------------------------------------
//-------------------------------------------------
import './SensonrsDetailsBar_comp.css';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";


import Login_comp from '../Login_comp/Login_comp';
import Task_comp from '../Task_comp/Task_comp';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import { setHistoryObj, setMatchObj } from '../store/actions';
import { centerData } from '../Data';
import GaugeChart from 'react-gauge-chart'
 class SensonrsDetailsBar_comp extends React.Component {
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


  render() {
    return (
      <>
     
 <div class="container-fluid">
        <div class="row">
            <div class="col-10"><div> <span class="statusGreen"><i class="fas fa-circle"></i></span><span class="rightSideSensorName">Sensor 1</span><i class="fas fa-eye goto3d"></i></div> <div class="idTag">id: 46546546</div></div>
            <div class="col-2 closeRightCont"><i class="fas fa-arrow-right closeRight"></i></div>
        </div>
    </div>
    <div class="LeftBarCont">

        
        {/* <canvas id="foo"></canvas> */}
        <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["#00FF00", "#FFC371","#FF5F6D"]} arcWidth={0.2} arcPadding={0.03} percent={0.31} textColor={"#000000"} formatTextValue={v=>v + "°C"}/>
        <div>Average Temperature</div>
        <div class="seperatorHorizontal"></div>
        <div>Temperature [°C]</div>
        <div id="chartContainer"></div>
        <div class="seperatorHorizontal"></div>
        <div>Asset Management Data</div>
        
        <table class="table table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Firstname</th>
                <th>Department</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Maintainance</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Contractor</td>
                <td>mary@example.com</td>
              </tr>

            </tbody>
        </table>
    </div>


    <Helmet><script>{`
        window.onload = function () {
        
          var dps = []; // dataPoints
          var chart = new CanvasJS.Chart("chartContainer", {
              title :{
                  text: ""
              },
              data: [{
                  type: "line",
                  dataPoints: dps
              }]
          });
          
          var xVal = 0;
          var yVal = 31; 
          var updateInterval = 1000;
          var dataLength = 20; // number of dataPoints visible at any point
          
          
          var updateChart = function (count) {
          
              count = count || 1;
          
              for (var j = 0; j < count; j++) {
                  yVal = yVal +  Math.round(0.75+ Math.random() *(-1.5));
                  dps.push({
                      x: xVal,
                      y: yVal
                  });
                  xVal++;
              }
          
              if (dps.length > dataLength) {
                  dps.shift();
              }
          
              chart.render();
          };
          
          updateChart(dataLength);
          setInterval(function(){updateChart()}, updateInterval);
          
          }
          setTimeout(name, 1000);
          function name() {
              var ss = document.getElementsByClassName("canvasjs-chart-credit");
              console.log(ss);
              for (let i = 0; i < ss.length; i++) {
                ss[i].style.display = "none";
                
              }
              
          }



    `}</script></Helmet>



     
      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setHistoryObj, setMatchObj})(SensonrsDetailsBar_comp);





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