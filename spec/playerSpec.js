describe('Player', () => {
  it('should have an initial budget', () => {
    let player = new Player(20);
    expect(player.budget).toEqual(20);
  });
});
