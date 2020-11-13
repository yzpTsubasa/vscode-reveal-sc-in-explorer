import revealInFileExplorer from '../lib/revealInFileExplorer';
import {ICommand} from './Command';



const cmd: ICommand = function(context) {
  let options = {};
  return revealInFileExplorer(context, options);
};

export default cmd;