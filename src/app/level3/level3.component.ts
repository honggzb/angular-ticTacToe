import { Component } from '@angular/core';
import { Level2Component } from './../level2/level2.component';

interface BoardCell {
  playerName: string;
  class: string;
}

@Component({
  selector: 'qh-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss']
})
export class Level3Component extends Level2Component {
  /**
   * Initializes a new instance of the {@link Level3Component} class.
   */
  constructor() {
    super();
  }

  public getCells(): BoardCell[][] {
    const result: BoardCell[][] = [];
    for (let row = 0; row < 3; row++) {
      result.push([]);
      for (let col = 0; col < 3; col++) {
        result[row][col] = {
          playerName: this.getPlayerName(col, row),
          class: this.getStyle(col, row),
        };
      }
    }
    return result;
  }

}
