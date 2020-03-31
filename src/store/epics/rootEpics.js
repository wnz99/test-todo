import { combineEpics } from 'redux-observable';
import playHistoryEpic from './playHistoryEpic';

const rootEpic = combineEpics(playHistoryEpic);

export default rootEpic;
