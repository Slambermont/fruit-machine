class Player {
  constructor(budget) {
    this.budget = budget
  }

  turn(fruitMachine, arr) {
    this.budget -= SINGLE_PLAY;
    this.budget += fruitMachine.play(arr);
  }
}
