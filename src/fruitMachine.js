class FruitMachine {
  constructor(jackpot) {
    this.jackpot = jackpot;
    this.fruit = ['blue', 'white', 'green', 'yellow'];
    this.slots = [];
  }

  play(arr = [
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 3)
    ]) {
    arr.forEach((element) => {
      this.slots.push(this.fruit[element])
    }, this);

    this.jackpot += 1;

    if ( arr.every( (val, i, arr) => val === arr[0] )) {
      return 'JACKPOT';
    }
  }
}
