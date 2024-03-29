

//import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { useState } from 'react';
import React, { Component } from 'react';
import ReportTime from "./ReportTime.js";





let i = 0;

function incrementID(){
  i++;
}

function colour(i){
 
  let colour1 = "white";

  var mod = i % 5;

  if (mod === 0){
    colour1 = "#f92672"; //rosa
  }
   else if (mod === 1){
    colour1 = "#a6e22e"; //grön #33c474
  }
   if (mod === 2){
     colour1 = "#66d9ef" //blå #4ac3ff
  }
   if (mod === 3){
     colour1 = "#ae81ff"; //lila #ca45ff
  }
   if (mod === 4){
    colour1 = "#fd971f"; //orange
  }

  incrementID();
  return colour1;
}

function timeCalc(total, part){
  var percentage = (part/total)*100;
  percentage = percentage.toFixed(2);
  console.log(total);
  console.log(part);
  return percentage;
}


function handleClickActivity(e) {
  e.preventDefault();
  console.log(' du klickade rätt typ');
}

function handleClickQuestion(e) {
  e.preventDefault();
  console.log(' du klickade rätt typ igen');
}



 //denna eller funktion gör vi i falla att det är null i localstarage
  function loadData(){
    //const q = loadData();
    try {
      const storage = JSON.parse(window.localStorage.getItem("data"));

      return storage || [];
    } catch (e) {
      return [];
    }
  }


function renderActivities(HHH){
	//const b = HHH.courses;
  const b = HHH;
 //  console.log(b[0].name);
	console.log("YOLO");
  console.log(b);
  console.log("YODO");
  console.log(HHH[0].name);
 //console.log(HHH.name);


 return (
     HHH.map(c=> (<ActivityInfo key={c.name} a={c} />))

    );
}


/*Funktion som ger innehåll genom att skicka in array av objekt*/
function ActivityInfo(HHH) {
  const a = HHH.a;
console.log("eheheh");
  let barProgress = timeCalc(a.totTime, a.repTime)+"%";
  var same = colour(i);
  
  return(
    <div className="WrapperActivity" onClick={handleClickActivity}>

      {/*Här ska vi försöka skriva ut arrayen med dess namn och tid */}
      <p className="ActivityName">{a.name}</p>
      <div className="ActivityDetails">
          <p className="ActivityPercentage">{timeCalc(a.totTime, a.repTime)}% done</p>
          <p className="ActivityMoreDetails">More details</p>
      </div>
      
      <div className="ActivityBar" style={{backgroundColor: same, opacity: 0.3}}></div>
      <div className="ActivityProgress" style={{width: barProgress, backgroundColor: same, opacity: 0.8}}></div>
    
    </div>
  )
}


//}//den här är tillaggd var sist förut!!!!!!!!!!!!
/*renderar sidelementen typ*/
	function APPChild(HHH) {
	  i = 0;
  	var HHH = loadData();

   console.log("JOOOJJJ");
   console.log(loadData());
  console.log("Elin");
 
  console.log("Pankaka");
  console.log(HHH);
  console.log("majs");

    /*meny lista typ*/
    const [menuWidth, changeMenuWidth] = useState(0);     
    const [buttonWidth, changeButtonWidth] = useState(0);
    const [hideMenu, triggerHideMenu] = useState(true);
    const [hideQuestion, triggerHideQuestion] = useState(true); 
    const [questionWidth, changeQuestionWidth] = useState(0); 
    const [questionOpacity, changeQuestionOpacity] = useState("100%"); 
    const [closeQuestionOpacity, changeCloseQuestionOpacity] = useState("0%");
   // const [redirect, setRedirect] = useState(false);




    /* om man klickar på question button */
    function handleClickQuestion() {
      if(hideQuestion){
        triggerHideQuestion(false);
        changeQuestionWidth("100%");
        changeQuestionOpacity("0%");
        changeCloseQuestionOpacity("100%");
       
      }
      else{
        triggerHideQuestion(true);
        changeQuestionWidth("0");
        changeQuestionOpacity("100%");
        changeCloseQuestionOpacity("0%");
      }
      console.log(' du klickade på frågetecknet');
    }

    function questionText(){
      if(hideQuestion === false){
        return(
          <div className="questionWrapper">
            <div className="App-header">
            <h1 className="title">HELP<br/></h1>
            </div>
            <div className="questionText">
              <p className="helpTitle">To do List</p>
              <p className="helpText">-centera meny √ <br/> -skriva text till help <br/> -hitta på namn <br/> -footer swipe</p>
              <p className="helpTitle">To do List</p>
              <p className="helpText">-centera meny √ <br/> -skriva text till help <br/> -hitta på namn <br/> -footer swipe</p>
              <p className="helpTitle">To do List</p>
              <p className="helpText">-centera meny √ <br/> -skriva text till help <br/> -hitta på namn <br/> -footer swipe</p>
              <p className="helpTitle">To do List</p>
              <p className="helpText">-centera meny √ <br/> -skriva text till help <br/> -hitta på namn <br/> -footer swipe</p>
              <p className="helpTitle">To do List</p>
              <p className="helpText">-centera meny √ <br/> -skriva text till help <br/> -hitta på namn <br/> -footer swipe</p>
            </div>
          </div>
        );
      }
    }


     /* om man klickar på meny-knappen */
    function HandleClickMenu(){       /*gör likadant för allt annat, typ?*/
      if(hideMenu){                   /* öppnar menyn */
        triggerHideMenu(false);
        changeMenuWidth("100%");
        changeButtonWidth("200px");
      }
      else{                           /* göm menyn */
        triggerHideMenu(true);  
        changeMenuWidth("0");
        changeButtonWidth("0");
      }
    }

  function reportTime(){
    if (hideMenu === false){
      return(
        <p className="buttonText">Report Time</p>
      );
    }
  }
/*
  function handleClickReport() {

  console.log(' du klickade på Report');
   setRedirect(true);
}
*/
  function addActivity(){
    if (hideMenu === false){
      return(
        <p className="buttonText">Add Activity</p>
      );
    }
  }

  function deleteActivity(){
    if (hideMenu === false){
      return(
        <p className="buttonText">Delete Activity</p>
      );
    }
  }

  return (
    <div className="App">
 
      {/*Header*/}
      <div className="App-header">
        <h1 className="title">APPNAME</h1>
         <p className="description">My Activities</p>
      </div>

      {/*Question Button*/}
      <div className="QuestionButton" onClick={handleClickQuestion}>
       <p className="question">?</p>
      </div>

      {/*Main body*/}
      <div className="MainBody">
        {renderActivities(HHH)}  {/*här ska vi rendera ActivityInfo, för att skriva ut kursinfo*/}
      </div>

      {/*Footer*/}
      <div className="App-bottom">
      <p className="Dots">Bottom Header</p>
      </div>

      {/*Menu Button*/}
      <div className="MenuButton" onClick={HandleClickMenu}>
        <div className="MenuIcon">
          <div className="menu"></div>
          <div className="menu"></div>
          <div className="menu"></div>
        </div>
      </div>

      {/*Menu List*/}
   
      <div className="menuClass" style={{width: menuWidth}}>
        <div className="menuID" style={{width: menuWidth}}></div>
        <Link to="/ReportTime.js"><div className="reportButton" style={{width: buttonWidth}}>{reportTime()}</div></Link>
        <div className="addButton" style={{width: buttonWidth}}>{addActivity()}</div>
        <div className="deleteButton" style={{width: buttonWidth}}>{deleteActivity()}</div>
      </div>
      
      {/*Question List*/}
      <div className="questionID" style={{width: questionWidth}}>
        {questionText()}
      </div>


    <div>
     
    </div>
  );

    </div>
  );
}

//return null;


export default APPChild;