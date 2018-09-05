describe('FruitMachine', () => {
  it('should have an initial jackpot of 10', () => {
    let fruitMachine = new FruitMachine(10)
    expect(fruitMachine.jackpot).toEqual(10)
  });

  describe('play', () => {
    it('should add 4 colors to slots array', () => {
      let fruitMachine = new FruitMachine(10)
      fruitMachine.play([0, 1, 2, 3]);
      expect(fruitMachine.slots).toEqual(['blue', 'white', 'green', 'yellow']);
    });

    it('should increase jackpot by 1', () => {
      let fruitMachine = new FruitMachine(10)
      fruitMachine.play();
      expect(fruitMachine.jackpot).toEqual(11);
    });

    it('should return jackpot if all fruit are the same', () => {
      let fruitMachine = new FruitMachine(10)
      expect(fruitMachine.play([0, 0, 0, 0])).toEqual('JACKPOT');
    });

    it('should not return jackpot if all fruit are not the same', () => {
      let fruitMachine = new FruitMachine(10)
      expect(fruitMachine.play([0, 0, 0, 1])).not.toEqual('JACKPOT');
    });
  });
});
