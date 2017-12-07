export class Book {
	public title: string;
	public author: string;
	public imagePath: string;
	public ISBN: any;

	constructor(title: string, author: string, imagePath: string, ISBN: any) {
		this.title = title;
		this.author = author;
		this.imagePath = imagePath;
		this.ISBN = ISBN;
	}
}