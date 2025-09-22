
function birthdayCakeCandles(candles) {
    // Write your code here
     let sortBig = [...candles].sort((a, b) => {return b - a; });
    let bigCount = 0;
    for(let i = 0; i < candles.length; i++) {
      if(sortBig[0] == candles[i]){
        bigCount+=1;
      }
    }
  return bigCount;
     
}
