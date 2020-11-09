
const name = 'world';
console.log(`Hello ${name}`);

function animalMap(options) {
  // with no parameters
  if (!options) {
  //Using reduce method, create a matrix with arrays of two values:
  //1. Location
  //2. Array with animals in this location
  //If the location already exists, includes animal directly in the animals array.
  //Then reduce matix to get the final object
    const entries = data.animals.reduce((arr, animal) => {
      if(arr.some(item => item[0] === animal.location)) {
        arr.forEach(item => {
          if(item[0] === animal.location){
            item[1].push(animal.name);
          }
        })
      } else {
        arr.push([animal.location, [animal.name]]);
      }
      
      return arr;
    },[]);
    return entries.reduce((obj, val) =>{
      obj[val[0]] = val[1];
      return obj;
    },{});

  } else if (options.includeNames) {

    //includeNames: true
    const entries = data.animals.reduce((arr, animal) => {
      //Object with resident's names:
      let obj = {};
        obj[animal.name] = animal.residents.map(item => item.name);
      if(arr.some(item => item[0] === animal.location)) {
        arr.forEach(item => {
          if(item[0] === animal.location){
            item[1].push(obj);
          }
        })
      } else {
        arr.push([animal.location, [obj]]);
       }
      
      return arr;
    },[]);
    return entries.reduce((obj, val) =>{
      obj[val[0]] = val[1];
      return obj;
    },{});

  }
}