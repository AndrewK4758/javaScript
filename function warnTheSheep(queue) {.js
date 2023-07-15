function warnTheSheep(queue) {
    let sheepNumber = 0;
    let wolfNumber = 0;
    let frontOfQueue = queue.length-1;
    queue.forEach((animal, position) => {
      if (animal === 'wolf' && wolfNumber !== frontOfQueue) {
        sheepNumber = (queue.length -1) - position;
        wolfNumber = position;
      }
    })
    if (wolfNumber === frontOfQueue) {
        return "Pls go away and stop eating my sheep"
      }
      return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`
  }

  console.log(warnTheSheep(["sheep", "sheep", "wolf",'sheep']))