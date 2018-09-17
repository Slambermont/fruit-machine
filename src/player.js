class Player {
  constructor(credits) {
    this.credits = credits
  }

  turn(fruitMachine, arr) {
    if ( this.credits < SINGLE_PLAY ) {
      throw 'You do not have enough credits.';
    };
    this.credits -= SINGLE_PLAY;
    this.credits += fruitMachine.play(arr);
  }
}
