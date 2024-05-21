import { Component } from '@angular/core';
import { BoardService } from './board.service';

interface BoardCell {
  playerName: string;
  class: string;
}

@Component({
  selector: 'qh-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.scss']
})
export class Level4Component {

  private playerNames = ['', 'X', 'O'];

  constructor(public board: BoardService) {
  }
  
  private playerToClass(player: number): string {
    if (player !== 0) {
      return `occupied-${this.playerNames[player]}`;
    }
    return '';
  }

  public getStyle(col: number, row: number): string {
    return this.playerToClass(this.board.boardContent[row][col]);
  }

  public getPlayer(col: number, row: number): string {
    return this.playerNames[this.board.boardContent[row][col]];
  }

  public getWinningPlayer(): string {
    return this.playerNames[this.board.winnerIndex];
  }

  public get content(): BoardCell[][] {
    const result: BoardCell[][] = [];
    for (let row of this.board.boardContent) {
      result.push(
        row.map((cellPlayer) => ({
          playerName: this.playerNames[cellPlayer],
          class: this.playerToClass(cellPlayer),
        }))
      );
    }
    return result;
  }

}
