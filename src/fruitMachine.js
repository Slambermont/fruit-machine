const SINGLE_PLAY = 1

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
    this.slots = []
    arr.forEach((element) => {
      this.slots.push(this.fruit[element])
    }, this);
  }

  _payIn() {
    this.jackpot += SINGLE_PLAY;
  }

  _payOut() {
    if ( this.slots.every( (val, i, arr) => val === arr[0] ) ) {
      return this.jackpot;
    } else if ( !this._hasDuplicates(this.slots) ) {
      return Math.floor( this.jackpot / 2 );
    } else if ( this._hasAdjacentDuplicates(this.slots) ) {
      return ( SINGLE_PLAY * 5 );
    } else {
      return 0;
    }
  }

  _hasDuplicates(arr) {
    for ( let x = 0; x < arr.length; x++ ) {
      for ( let y = 0; y < arr.length; y++ ) {
        if ( arr[x] === arr[y] && x != y ) { return true }
      }
    }
    return false
  }

  _hasAdjacentDuplicates(arr) {
    for ( let x = 0; x < arr.length; x++ ) {
      if ( arr[x] === arr[x+1] ) { return true }
    }
    return false
  }

  play(arr) {
    this._payIn();
    this.rollSlots(arr);
    let payOut = this._payOut();
    payOut <= this.jackpot ? this.jackpot -= payOut : this.jackpot = 0;
    return payOut
  }
}
