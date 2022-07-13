
// Using Closure
let sum = (a) => {
    var total = a;
    return inner = (b) => {
      if (typeof b != "number") return total; 
      else {
        total += b;
        return inner;
      }
    }
  }

  //The empty brackets in the last call as a close key
  console.log("sum(1)(4)(66)(35)(0)()")
  console.log(sum(1)(4)(66)(35)(0)());
  console.log("sum(7)(8)(43)()");
  console.log(sum(7)(8)(43)());

