describe('Player', () => {
  it('should have an initial credit amount', () => {
    let player = new Player(20);
    expect(player.credits).toEqual(20);
  });

  describe('turn', () => {
    it('should call the play function on fruit machine', () => {
      let player = new Player(20);
      let fruitMachine = new FruitMachine(10);
      spyOn(fruitMachine, 'play');

      player.turn(fruitMachine);
      expect(fruitMachine.play).toHaveBeenCalled();
    });

    it('should decrease credits by 1', () => {
      let player = new Player(20);
      let fruitMachine = new FruitMachine(10);

      player.turn(fruitMachine, [0, 1, 2, 1]);
      expect(player.credits).toEqual(19)
    });

    it('should increase credits by earnings', () => {
      let player = new Player(20);
      let fruitMachine = new FruitMachine(10);

      player.turn(fruitMachine, [0, 0, 0, 0]);
      expect(player.credits).toEqual(30);
    });
  });
});
