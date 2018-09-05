describe('FruitMachine', () => {
  const fruitMachine = new FruitMachine(10)

  it('should have an initial jackpot of 10', () => {
    expect(fruitMachine.jackpot).toEqual(10)
  });
});
