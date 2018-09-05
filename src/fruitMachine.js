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

  payIn(amount) {
    this.jackpot += 1;
  }

  calculatePayOut() {
    if (this.slots.every( (val, i, arr) => val === arr[0] )) {
      return this.jackpot;
    } else {
      return 0;
    }
  }

  play(arr = null ) {
    this.rollSlots(arr);
    this.payIn(1);
    return this.calculatePayOut();
  }
}
