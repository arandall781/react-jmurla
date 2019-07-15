import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

//User prompts for calculation

document.getElementById("clickMe").onclick =
  function Forge(){ 

var a, b, e;
a = prompt("Enter Max FP of Great Building");
b = prompt("Enter Current FP of Great Building");
e = prompt("Enter Opponent's Donated FP");

//Calculation of user inputs

var c = Number(a) - Number(b);
var f = Number(c) - Number(e);
var g = Number(f) / 2;
var x = Number(g) + Number(e);
var z = Math.ceil(x)


//Show results of calculation

alert("You must donate " + z + " Forge Points"); 
location.reload()
render(<App />, document.getElementById('root'));
}


//User prompts for Calculation

document.getElementById("clickMeee").onclick = 
function OnePointNine(){

  var a, c;
  a = prompt("Enter 1st Place Contribution Bonus")
  c = prompt("Max FP of GB")

  //Calculation of user inputs

  var e = Number(a) * 1.9;
  var d = Number(e) * 2;
  var f = Number(c) - Number(d);

  //Show results of calculation

alert("You must donate " + f + " Forge Points to Secure 1st Place's Position");
location.reload()
render(<App />, document.getElementById('root'));
}