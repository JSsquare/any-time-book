export class Book {
	public title: string;
	public author: string;
	public imagePath: string;
	public isbn: string;

	constructor(title: string, author: string, imagePath: string, isbn: string) {
		this.title = title;
		this.author = author;
		this.imagePath = imagePath;
		this.isbn = isbn;
	}
}