export class Book {
	public title: string;
	public author: string;
	public imagePath: string;
	public isbn: string;
	public action: string;

	constructor(title: string, author: string, imagePath: string, isbn: string, action: string) {
		this.title = title;
		this.author = author;
		this.imagePath = imagePath;
		this.isbn = isbn;
		this.action = action;
	}
}