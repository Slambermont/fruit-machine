describe('FruitMachine', () => {
  const fruitMachine = new FruitMachine(10)

  it('should have an initial jackpot of 10', () => {
    expect(fruitMachine.jackpot).toEqual(10)
  });

  describe('play', () => {
    it('should add 4 colors to slots array', () => {
      fruitMachine.play([0, 1, 2, 3]);
      expect(fruitMachine.slots).toEqual(['blue', 'white', 'green', 'yellow']);
    });
  });
});
