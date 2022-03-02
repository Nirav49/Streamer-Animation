
  
  export function getRankBackgroundColor(rank: number) {
    switch (rank) {
      case 1:
        return "#fff9e3";
      case 2:
        return "#eef4ff";
      case 3:
        return "#fff2e9";
      default:
        return;
    }
  }

  export function getNumberBackGroundColor(rank:number){
    switch (rank) {
      case 1:
        return "yellow";
      case 2:
        return "#cccccc";
      case 3:
        return "sandybrown";
      default:
        return;
    }
  }
  
  export function getRandomNumber(min: number = 1000, max: number = 1000000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }