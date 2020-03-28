import { combineEpics } from 'redux-observable';
import noopEpic from './noopEpic';

const rootEpic = combineEpics(noopEpic);

export default rootEpic;
