import fetch from 'node-fetch';

(async () => {
   const prizeData = await fetch('http://api.nobelprize.org/v1/prize.json').then(response => response.json());
  
//    const parsed = JSON.parse(prizeData)

    const result = Object.values(prizeData).filter(obj => (obj.year > 2000 && obj.year <=2019))
    const finalres = result.filter(obj => obj.category == 'Chemistry')

    // console.log(finalres)
    console.log(Object.values(prizeData))

})();

