class Player {
  constructor(budget) {
    this.budget = budget
  }

  turn(fruitMachine, arr) {
    this.budget -= 1;
    this.budget += fruitMachine.play(arr);
  }
}
