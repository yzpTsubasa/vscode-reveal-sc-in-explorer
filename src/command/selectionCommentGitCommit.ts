import selectionCommentGitCommit from '../lib/selectionCommentGitCommit';
import {ICommand} from './Command';



const cmd: ICommand = function() {
  let options = {showDialog: false};
  return selectionCommentGitCommit(options);
};

export default cmd;