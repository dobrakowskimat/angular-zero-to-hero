interface User {
  login: string;
  name: string;
  lastName: string;
  age: number;
}

interface UserToRent extends User {
  playedGames: PlayedGame[];
}
