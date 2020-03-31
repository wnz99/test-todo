import { combineEpics } from 'redux-observable';
import noopEpic from './noopEpic';
import playHistoryEpic from './playHistoryEpic';

const rootEpic = combineEpics(noopEpic, playHistoryEpic);

export default rootEpic;
