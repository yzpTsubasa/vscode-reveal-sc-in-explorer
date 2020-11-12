import revealInExplorer from '../lib/revealInExplorer';
import {ICommand} from './Command';



const cmd: ICommand = function(context) {
  let options = {};
  return revealInExplorer(context, options);
};

export default cmd;