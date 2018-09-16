describe('FruitMachine', () => {
  it('should have an initial jackpot of 10', () => {
    let fruitMachine = new FruitMachine(10)
    expect(fruitMachine.jackpot).toEqual(10)
  });

  describe('rollSlots', () => {
    it('should add 4 colors to slots array', () => {
      let fruitMachine = new FruitMachine(10)
      fruitMachine.rollSlots([0, 1, 2, 3]);
      expect(fruitMachine.slots).toEqual(['blue', 'white', 'green', 'yellow']);
    });
  });

  describe('play', () => {
    it('should return jackpot if all fruit are the same', () => {
      let fruitMachine = new FruitMachine(10)
      expect(fruitMachine.play([0,0,0,0])).toEqual(11);
      expect(fruitMachine.jackpot).toEqual(0);
    });

    it('should return 0 if all fruit are not the same', () => {
      let fruitMachine = new FruitMachine(10)
      expect(fruitMachine.play([0,0,0,1])).toEqual(0);
    });

    it('should return 5 if all fruit are different', () => {
      let fruitMachine = new FruitMachine(10);
      expect(fruitMachine.play([0, 1, 2, 3])).toEqual(5);
      expect(fruitMachine.jackpot).toEqual(6);
    });
  });
});
