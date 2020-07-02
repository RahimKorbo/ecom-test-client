import React from 'react';

export function cardholderstatus() {
    let items=[];
    items.push(<option>Select</option>)
    items.push(<option value='NW'>NW</option>);
    items.push(<option value='W'>W</option>);
    return items;
}

export function pinVerifyTimeout() {
    let items = [];
    items.push(<option>Select</option>)
    for (let i = 0; i <= 30; i++) {
      items.push(<option value={i}>{i} Seconds</option>);
    }
    return items;
  }


export function langCode(){
  let items = [];
  items.push(<option>Select</option>)
  items.push(<option value='en'>en</option>);
  items.push(<option value='us'>us</option>)
  return items; 
}