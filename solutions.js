// Elevator Distance
function elevatorDistance(array) {
  let distance = 0;
  for(let i = 0; i < array.length - 1; i++){
    distance += Math.abs(array[i]-array[i + 1]);
  }
  return distance;
}
