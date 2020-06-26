function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  for (let i = 0; i < arr.length; i++) {
    const myObj = arr[i];
    const myAlt = Object.values(arr[i])[1];
    const myOrbital = Math.round(2 * Math.PI * Math.sqrt( Math.pow((earthRadius + myAlt), 3) / GM )) ;
    return {name: myObj.name, orbitalPeriod: i.avgAlt}
  };
  //console.log(Object.keys(arr[0])[1], myObj.avgAlt)
  //return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));