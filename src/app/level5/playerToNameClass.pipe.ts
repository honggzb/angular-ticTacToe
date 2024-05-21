import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerName'
})
export class PlayerIntoNamePipe implements PipeTransform {
  private playerNames = ['', 'X', 'O'];
  transform(player: number, ...args: unknown[]): string {
    if(player < 0 || player > 2) {
      throw new Error('Invalid player');
    }
    return this.playerNames[player];
  }
}

@Pipe({
  name: 'playerClass'
})
export class PlayerNameIntoClassPipe implements PipeTransform {
  transform(player: string, ...args: unknown[]): string {
    return `occupied-${player}`;
  }
}

