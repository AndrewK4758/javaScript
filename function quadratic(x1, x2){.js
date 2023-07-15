function quadratic(x1, x2){
    let a = 1;
    let b = (x1 * -1) + (x2 * -1);
    let c = (x1 * -1) * (x2 * -1);

    return [a, b, c];
  }

  console.log(quadratic(1,2))