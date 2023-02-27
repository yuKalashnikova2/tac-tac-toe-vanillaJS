import { startGame } from '../utils/game';
import { Grid } from './Grid'

export const App = () => {
    const { turn, resetGame } = startGame();

    return Grid({ onClickCell: onClick})
}