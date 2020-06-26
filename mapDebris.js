/** arr.map(obj = { })를 const newArr이 없이 진행하면 return 라인때문에 array의 갯수에 관계없이 
 * 한번 실행하고 return을 날리고 나가버린다. const newArr = 같이 결과를 묶어서 저장해 둘 필요가 있다.
 * 이렇게 하면 자동으로 map의 결과들이 return에 의해서 전부 쌓이고 그 결과가 newArr 변수에 저장된다. 
 * map을 쓰면 좋은 점은 바로 배열에서 벗겨서 나오는 argument가 바로 object를 가리키고 있다. 따라서
 * 별도의 변환이나 적요없이 바로 object에 관한 모든 작업이 직접 가능하다. 
 */

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const newArr = arr.map(obj => {
    const myOrbital = Math.round(2 * Math.PI * Math.sqrt( Math.pow((earthRadius + obj.avgAlt), 3) / GM )) ;
    obj.avgAlt = myOrbital; // object의 avgAlt의 값을 갱신하는 방법
    return {name: obj.name, orbitalPeriod: obj.avgAlt}; // object의 key이름을 바꾸는 방법 새이름: 객체.옛날이름
  }) 
  return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));