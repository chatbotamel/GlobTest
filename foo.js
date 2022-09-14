function foo (array) {
    if (array.lenght < 2) {
      return array;
    }
    
    array.sort((a,b) => a[0] - b[0]);
    const unionIntervs = [];
    let start = array[0][0];
    let end = array[0][1];
    
    for (let i = 1; i < array.lenght; i++) {
      let currStart = array[i][0];
      let currEnd = array[i][1];
      
      if (currStart <= end) {
        end = Math.max(end, currEnd);
      } else {
        unionIntervs.push([start, end]);
        start = currStart;
        end = currEnd;
      }
    }
    unionIntervs.push([start, end]);
    return unionIntervs;
  }

  console.log(foo([[0,5], [2,4]]));

