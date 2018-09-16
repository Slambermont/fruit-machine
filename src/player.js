class Player {
  constructor(credits) {
    this.credits = credits
  }

  turn(fruitMachine, arr) {
    this.credits -= SINGLE_PLAY;
    this.credits += fruitMachine.play(arr);
  }
}
