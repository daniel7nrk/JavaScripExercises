function convertQueryToMap(str) {
  const result = {};
  if (!str) return result;

  const pairs = str.split("&");
  // console.log(pairs);
  

  for (let i = 0; i < pairs.length; i++) {
    const sides = pairs[i].split("=");
    // console.log(sides);
    const keyPart = sides[0];
    // console.log(keyPart);    
    const valuePart = sides[1];
    // console.log(valuePart);
    
    const value = decodeURIComponent(valuePart);
    
    const keys = keyPart.split(".");

    let current = result;


    for (let key of keys) {

      if (key === keys[keys.length - 1]) {
        current[key] = value;
      } else {
        if (!current[key]) {
          current[key] = {}; 
        }
        current = current[key];
      }
    }
  }

  return result;
}

var query = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue';
console.log(convertQueryToMap(query));



// out = {
//   'user': {
//     'name': {
//       'firstname': 'Bob',
//       'lastname': 'Smith'
//     },
//     'favoritecolor': 'Light Blue'
//   }
// };

