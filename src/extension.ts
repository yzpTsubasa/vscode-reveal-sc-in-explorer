import * as vscode from 'vscode';
import revealInExplorer from './command/revealInExplorer';
import {ICommand} from './command/Command';


function handleSuccess(result: any) {
	if (result) {
			vscode.window.showInformationMessage(result);
	}
}


function handleError(err: Error) {
	if (err && err.message) {
			vscode.window.showErrorMessage(err.message);
	}
	return err;
}


function register(context: vscode.ExtensionContext, command: ICommand, commandName: string) {
	const proxy = (...args: any) => {
		return command(args[0]).then(handleSuccess).catch(handleError);
	};
	const disposable = vscode.commands.registerCommand(`vscode-reveal-sc-in-explorer.${commandName}`, proxy);

	context.subscriptions.push(disposable);
}


export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vscode-reveal-sc-in-explorer" is now active!');
	register(context, revealInExplorer, 'revealInExplorer');
}


// this method is called when your extension is deactivated
export function deactivate() {}
