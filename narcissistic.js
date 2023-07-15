function narcissistic(value) {
    let nums = value.toString()
    const toPower = parseInt(nums.length)
    return nums.split('').map(ele => (ele ** toPower)).reduce((acc,nxt) => acc+nxt) === value
    
  }

  
  console.log(narcissistic(153))