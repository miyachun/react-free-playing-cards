import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"

import "./index.css"

import MYCard from "./CardIndex.js"
import {Card, ListGroup, Button, Row, Col } from 'react-bootstrap';
function MyA() {

const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];

const rand =  Math.floor(Math.random() * (13 - 0 )) + 0;

const suits = ["c", "d", "h", "s"];

  const [deckType, selectDeck] = useState("basic");
  const [side, changeSide] = useState({back: true});
  const [clubs, setCardValue] = useState(ranks[0]+ suits[0] );
  const [myNum, setNumber] = useState("選擇比7大還是比7小");
  const [bigsmall, setBigSmall] = useState();
  const [bigsmallText, setBigSmallText] = useState();
  const [isOff, setIsOff] = useState(true);
  const [buttonT, setButtonT] = useState("玩遊戲");
  let getAns=clubs.replace(/d/,"");

  let getAns0=clubs.charAt(1);
 



  const RumCardS7=()=>{
    setCardValue(ranks[rand]+ suits[1] );
    setBigSmall(7);
    setBigSmallText("比7小");
  }

  const RumCardS8=()=>{
    setCardValue(ranks[rand]+ suits[1] );
    setBigSmall(8);
    setBigSmallText("比7大");
  }
// setIsOff(!isOff)}>{ isOff ? 'ON' : 'OFF' }
  const myClick=()=>{
   
  changeSide(s => ({back: !s.back}));
  setButtonT("開牌");
  //console.log("0000:",getAns);
 // console.log("zzz",bigsmallText);

if(bigsmallText ==undefined){

  changeSide({back: true});
  setButtonT("開牌");
  alert("選擇比7大或比7小");

}

 if(side.back==false){
    setNumber("蓋牌");
    setButtonT("蓋牌");
    setBigSmallText("");
  }
 if(getAns0!="c"){
     
  if(side.back==true){
 
    if(bigsmall==7 && getAns>7 ){
      setNumber("你LOSE了");
    }
    if(bigsmall==7 && getAns<=7){
      setNumber("你WIN了");
    }
    if(bigsmall==8 && getAns<8){
      setNumber("你LOSE了");
    }
    if(bigsmall==8 && getAns>=8){
      setNumber("你WIN了");
    }

  if(bigsmall==8  && (getAns=="T" || getAns=="J" || getAns=="Q" || getAns=="K")){
      setNumber("你WIN了");
  }
  
  if(bigsmall==7  && (getAns=="T" || getAns=="J" || getAns=="Q" || getAns=="K")){
    setNumber("你LOSE了");
}
  if(bigsmall==7  && getAns=="A"){
    setNumber("WIN了");
}
if(bigsmall==8  && getAns=="A"){
  setNumber("你LOSE了");
}

 }
    }
    }
  return (

<>
<Card style={{ width: '18rem' }}>
  <Card.Header>猜大還是小</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item> 
      <ul className="cards" >
        {     
            <li >
              <MYCard card={clubs} {...side}  deckType={deckType} height="200px" />
            </li>         
        }
      </ul>
      </ListGroup.Item>
      <ListGroup.Item>
<Row>

<Col>
 <Button variant="danger" onClick={RumCardS8}>比7大</Button>{' '}
</Col>

<Col>
<Button variant="danger" onClick={RumCardS7}>比7小</Button>{' '}
</Col>
</Row>
</ListGroup.Item>
    
    <ListGroup.Item style={{color:'red'}}>{bigsmallText}</ListGroup.Item>
    <ListGroup.Item><h4>{myNum}</h4></ListGroup.Item>
    <ListGroup.Item><Button variant="primary" onClick={myClick}>{buttonT}</Button>{' '}</ListGroup.Item>
  </ListGroup>
</Card>

      </> 
     
 
  )
}

export default MyA;