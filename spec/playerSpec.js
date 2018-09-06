describe('Player', () => {
  it('should have an initial budget', () => {
    let player = new Player(20);
    expect(player.budget).toEqual(20);
  });

  describe('turn', () => {
    it('should call the play function on fruit machine', () => {
      let player = new Player(20);
      let fruitMachine = new FruitMachine(10);
      spyOn(fruitMachine, 'play');

      player.turn(fruitMachine);
      expect(fruitMachine.play).toHaveBeenCalled();
    });
  });
});
