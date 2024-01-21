// export class Todo {
//     text: string;
//     completed: boolean;
//     id: any;
//     constructor(text:string, completed = false) {
//         this.text = text;
//         this.completed = completed;
//         // this.id = uuid_1.v4();
//     }
// }
// export default new Todo();

export class Todo {
	title: string;
	description: string;
	completed: boolean;
	dateCompleted: Date | undefined;
	id: any;
	dueDate: Date;
	priority: string;
	favourite: boolean = false;

	// additional information about todo
	type: string;
	date: Date;
	// some random info about Todo (might change later on)
	// Must have a title, can be empty discription, type would be like markdown or normal mode only
	// so a default todo will be something like {title: "new todo", description:"", completed: false, type: "normal", date: new Date(), id: null, priority: "normal"}
	constructor(
		title: string,
		description: string = "",
		completed = false,
		type: string = "normal",
		date: Date = new Date(),
		dueDate: Date = new Date(new Date().setDate(new Date().getDate() + 1)), // Set dueDate to one day after the current date (by copilot, source is also by them lol) (via https://stackoverflow.com/a/563442/1375163)
		// id: any =
		// generate a random id (via https://stackoverflow.com/a/2117523/1375163)
		id: any = Math.random().toString(36).substring(2, 15) +
			Math.random().toString(36).substring(2, 15),
		priority: string = "normal",
		favourite: boolean = false
	) {
		this.title = title;
		this.favourite = favourite;
		this.description = description;
		this.completed = completed;
		this.priority = priority;
		// this.id = uuid_1.v4();
		this.type = type;
		this.date = date;
		this.id = id;
		this.dueDate = dueDate;
	}

	editTodo(
		title: string = this.title,
		description: string = this.description,
		completed: boolean = this.completed,
		type: string = this.type,
		date: Date = this.date,
		dueDate: Date = this.dueDate,
		id: any = this.id,
		priority: string = this.priority
	) {
		this.title = title;
		this.description = description;
		this.completed = completed;
		this.priority = priority;
		// this.id = uuid_1.v4();
		this.type = type;
		this.date = date;
		this.id = id;
		this.dueDate = dueDate;
	}

	// toggle completion status
	toggleCompleted() {
		this.completed = !this.completed;
		this.dateCompleted = new Date();
		console.log("toggled from the class xd");
	}
	toggleFavourite() {
		this.favourite = !this.favourite;
	}
}
