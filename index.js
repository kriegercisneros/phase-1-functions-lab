function distanceFromHqInBlocks(block){
    if(block>=43){
        return block-42;
        }
    else {
        return block-26;   
    } 
};

function distanceFromHqInFeet(feet){
    let result = distanceFromHqInBlocks(feet);
    return result * 264; 
};

function distanceTravelledInFeet(start, destination){
  let start1= start * 264;
  let destination1 = destination * 264;
  if(start1<destination1){
    return destination1 - start1}
  else {
    return start1 - destination1;
  }
};
function calculatesFarePrice(start, destination){
    let distance= distanceTravelledInFeet(start, destination);
    let price = 0;
    if (distance >= 400 && distance <= 2000) {
        price = (distance-400)*.02
    }
    else if (distance >= 2001 && distance <= 2500) {
        price = 25;
    }
    else if(distance >= 2501) {
        return "cannot travel that far"
    }
    return price;
};