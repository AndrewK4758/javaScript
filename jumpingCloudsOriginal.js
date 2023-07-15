const jumpingOnCoulds = (c) => {
    let j = 0;
    for (let i = 0; i < c.length - 1; i++, j++) {
      if (i + 2 < c.length && c[i + 2] == 0) {
        i++;
      }
    }
    return j;
};

jumpingOnCoulds([0, 0, 1, 0, 0, 1, 0])