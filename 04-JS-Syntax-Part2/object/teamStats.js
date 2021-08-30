const team = {
  _players: [
    {
      firstName: "raif",
      lastName: "salim",
      age: 6,
    },
    {
      firstName: "rafa",
      lastName: "ghifari",
      age: 2,
    },
    {
      firstName: "kamandanu",
      lastName: "wijaya",
      age: 35,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "parara",
      teamPoints: 12,
      opponentPoints: 17,
    },
    {
      opponent: "rogrog",
      teamPoints: 21,
      opponentPoints: 10,
    },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },

  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts,
    };
    this.games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addPlayer('bordom', 14, 55)
team.addPlayer('willy', 32, 32)
team.addPlayer('socc', 42, 13)

console.log(team.games)
console.log(team.players);
