class Player {
  constructor(budget) {
    this.budget = budget
  }

  turn(fruitMachine) {
    this.budget -= 1;
    this.budget += fruitMachine.play();
  }
}
