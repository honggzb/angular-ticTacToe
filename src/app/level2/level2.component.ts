import { Component } from '@angular/core';

@Component({
  selector: 'qh-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component {

  // public testField = 'X';
  // private testClass = 'occupied-x';

  // constructor() {
  //   // setInterval(() => {
  //   //   if(this.testClass === 'occupied-x') {
  //   //     this.testClass = 'occupied-o';
  //   //   } else {
  //   //     this.testClass = 'occupied-x';
  //   //   }
  //   // }, 1000);
  // }

  // public getTestField(): string {
  //   return 'O';
  // }

  // public getTestClass(): string {
  //   return this.testClass;
  // }


  // public restart() {
  //   console.log('hello')
  // }

  private currentPlayerIx!: number;
  private currentWinnerIx!: number;
  private playerNames: string[];
  public boardContent!: number[][];

  constructor() {
    this.playerNames = [ '', 'X', 'O'];
    this.onRestart();
  }

  public getPlayerName(col: number, row: number): string {
    return this.playerNames[this.boardContent[row][col]];
  }

  public getStyle(col: number, row: number): string {
    if(this.boardContent[row][col] !== 0) {
      return `occupied-${this.getPlayerName(col, row)}`;
    }
    return '';
  }

  public get winnerIndex(): number {
    return this.currentWinnerIx;
  }

  public getWinnerName(): string {
    return this.playerNames[this.currentWinnerIx];
  }

  public set(col: number, row: number): void {
    if(this.currentWinnerIx === 0 && this.boardContent[row][col] === 0) {
      this.boardContent[row][col] = this.currentPlayerIx;
      this.currentPlayerIx = this.currentPlayerIx === 1 ? 2 : 1;
    }
    this.currentWinnerIx = this.getWinnerIndex();
  }

  public onRestart(): void {
    console.log('restart');
    this.boardContent = [
      [ 0, 0, 0],
      [ 0, 0, 0],
      [ 0, 0, 0],
    ];
    this.currentPlayerIx = 1;
    this.currentWinnerIx = 0;
  }

/**
 * Gets the player (1 or 2) who has won the game
 * @returns player (1 or 2) who has won, or 0 if there is no winner yet
 */
  private getWinnerIndex(): number {
    // Check rows
    for (let row = 0; row < 3; row++) {
      const first = this.boardContent[row][0];
      if (
        first !== 0 &&
        this.boardContent[row][1] === first &&
        this.boardContent[row][2] === first
      ) {
        return first;
      }
    }
    // Check columns
    for (let col = 0; col < 3; col++) {
      const first = this.boardContent[0][col];
      if (
        first !== 0 &&
        this.boardContent[1][col] === first &&
        this.boardContent[2][col] === first
      ) {
        return first;
      }
    }
    // Check diagonals
    const first = this.boardContent[1][1];
    if (first !== 0) {
      if (
        this.boardContent[0][0] === first &&
        this.boardContent[2][2] === first
      ) {
        return first;
      }
      if (
        this.boardContent[2][0] === first &&
        this.boardContent[0][2] === first
      ) {
        return first;
      }
    }
    return 0;
  }
  
}
