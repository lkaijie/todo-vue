export class Todo {
    text: string;
    completed: boolean;
    id: any;
    constructor(text:string, completed = false) {
        this.text = text;
        this.completed = completed;
        // this.id = uuid_1.v4();
    }
}
// export default new Todo();