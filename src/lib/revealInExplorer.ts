import * as vscode from 'vscode';
const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);

export default async (context: vscode.SourceControl, options: any): Promise<any> => {
  if (!context) {
    return;
  }
  let uri = context.rootUri;
  if (!uri) {
    return;
  }
  let targetWorkspace = vscode.workspace.getWorkspaceFolder(uri);
  if (!targetWorkspace) {
    return;
  }
  vscode.workspace.fs.readDirectory(uri).then(async v => {
    let fname: string = "";
    for (let i = 0, len = v.length; i < len; ++i) {
      let tmp = v[i];
      if (tmp[1] == vscode.FileType.File) {
        fname = tmp[0];
        break;
      }
    }
    if (fname) {
      await vscode.window.showTextDocument(vscode.Uri.parse(`${uri?.path}\\${fname}`), {});
      await vscode.commands.executeCommand('workbench.files.action.collapseExplorerFolders');
      await vscode.commands.executeCommand("workbench.files.action.showActiveFileInExplorer");
    }
  });
  return;
};