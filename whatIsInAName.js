// my code:
// filter out the first argument object array meet the condition.
// inside the filter, use for in loop for 1st argument.
// within the above for in loop, declare another for in loop for 2nd argument,
// if the 2nd argument not has any keys from frist argument, return false,
// if the 2nd argument has the same object but value is not the same as the 1st one, return false. end for in loop.

// set a condition, if the 1st and 2nd has the same key, and value are the same, also 2nd argument has less keys than the 1st argument, return true.

function whatIsInAName(collection, source) {
  let matchedArray = collection.filter(obj => {
    for (const key in obj ) {
      for (const k in source) {
        if ( !obj.hasOwnProperty(k) || source[k] !== obj[k]) {
          return false;
        }
      }

      if (obj[key] === source[key] && Object.keys(obj).length >= Object.keys(source).length ) {
        return true;
      }
    }
  })
  console.log(matchedArray);
  return matchedArray;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
//
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })

// whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
