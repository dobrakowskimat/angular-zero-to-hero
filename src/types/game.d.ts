interface Game {
  title: string;
  type: string;
}

interface PlayedGame extends Game {
  skillLvl: number;
}
