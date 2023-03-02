import { turnIsRecorded, calculateWinner, calculateGameOver } from './turn';
import { winningStates } from './consts';

export const startGame = () => {
  let xState = [];
  let oState = [];
  let xTurn = true;

  let turn = ({ id, showGameResult }) => {
    if (!id && id !== 0) return;
    if (turnIsRecorded([...xState, ...oState], id)) return;

    xTurn ? xState.push(id) : oState.push(id);

    let winner = calculateWinner({ xState, oState, winningStates });
    if (winner) {
      if (typeof showGameResult === 'function') {
        showGameResult({
          text: winner === 'x' ? 'X wins!' : 'O wins!',
        });
      }
      return;
    }

    if (calculateGameOver([...xState, ...oState])) {
      if (typeof showGameResult === 'function') {
        showGameResult({ text: 'Game over!'});
      }

      return;
    }

    xTurn = !xTurn;

  };

  return {
    turn,
    xState,
    oState,
  };
};
