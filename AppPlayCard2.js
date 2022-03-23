import React, {useState, useEffect} from "react"

import MYCard from "./CardIndex.js"
import {Card, ListGroup, Button } from 'react-bootstrap';
function MyA() {
  const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]
  const suits = ["c", "d", "h", "s"]
  const rand =  Math.floor(Math.random() * (13 - 0 )) + 0;
  const rand1 =  Math.floor(Math.random() * (13 - 0 )) + 0;
 
  const [deckType, selectDeck] = useState();
  const [side, changeSide] = useState({back: false});
  const [clubsBOSS, setCardValueBOSS] = useState(ranks[rand]+ suits[0]);
  const [clubs, setCardValue] = useState(ranks[rand1]+ suits[1] );
  const [showResults, setShowResults] = React.useState(false);
  const [showFinalT, setFinalText] = React.useState(false)


  let getAnsB=clubsBOSS.replace(/c/,"");
  let getAnsC=clubs.replace(/d/,"");
  //console.log(getAns);


const runGAME=()=>{
  setShowResults(true);
  
if(getAnsB=="T"){ getAnsB=10;}
if(getAnsB=="J"){ getAnsB=11;}
if(getAnsB=="Q"){ getAnsB=12;}
if(getAnsB=="K"){ getAnsB=13;}
if(getAnsB=="A"){ getAnsB=1;}
if(getAnsC=="T"){ getAnsC=10;}
if(getAnsC=="J"){ getAnsC=11;}
if(getAnsC=="Q"){ getAnsC=12;}
if(getAnsC=="K"){ getAnsC=13;}
if(getAnsC=="A"){ getAnsC=1;}


console.log("B:",getAnsB);
console.log("C:",getAnsC);

if(getAnsB>getAnsC ){
  setFinalText(getAnsB+">"+getAnsC+" (⍨你輸了)")
}else if(getAnsB==getAnsC){
  setFinalText(getAnsB+"="+getAnsC+" (^^大家平手)")
}else{
  setFinalText(getAnsB+"<"+getAnsC+" (⍢你贏了)")

}

}

const Results = () => (
  <div id="results" className="search-results">
    <MYCard card={clubs} {...side}  deckType={deckType} height="200px" />
  </div>
)

  return (
<>    

<Card style={{ width: '18rem' }}>
  <Card.Header>比大小</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item><MYCard card={clubsBOSS} {...side} deckType={deckType} height="200px" /></ListGroup.Item>
    <ListGroup.Item> <Button onClick={runGAME} variant="primary">開牌</Button>{' '}</ListGroup.Item>
    <ListGroup.Item>{ showResults ? <Results /> : null } </ListGroup.Item>
    <ListGroup.Item>{showFinalT}</ListGroup.Item>
  </ListGroup>
</Card>


</>
  )
}
export default MyA;