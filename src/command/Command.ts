
export interface ICommand {
    (context: any): Promise<any>;
}
