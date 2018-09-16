class FruitMachine {
  constructor(jackpot) {
    this.jackpot = jackpot;
    this.fruit = ['blue', 'white', 'green', 'yellow'];
    this.slots = [];
  }

  rollSlots(arr = [
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 3)
    ]) {
    arr.forEach((element) => {
      this.slots.push(this.fruit[element])
    }, this);
  }

  payIn() {
    this.jackpot += 1;
  }

  _payOut() {
    return this.slots.every( (val, i, arr) => val === arr[0] ) ?
      this.jackpot : 0;
  }

  play(arr) {
    this.payIn();
    this.rollSlots(arr);
    let payOut = this._payOut();
    this.jackpot -= payOut;
    return payOut
  }
}
