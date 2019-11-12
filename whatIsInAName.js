// loop the array collection
// use for in loop to iterate each object and compare with source



function whatIsInAName(collection, source) {
  let foundItems = collection.filter(obj => {

    for (const key in obj ) {

      for (const k in source) {
        if ( !obj.hasOwnProperty(k)) {
          return false
        }
      }

      if (obj[key] === source[key] && Object.keys(obj).length >= Object.keys(source).length ) {
        return true;
      }
    }
  })

  console.log(foundItems);
  return foundItems;

}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
//
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
