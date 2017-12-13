import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})

export class HeaderComponent {

	constructor(private dataStorageService: DataStorageService){

	}

	onSaveData() {
		this.dataStorageService.storeBooks()
		.subscribe(
			(response: Response) => {
				console.log(response);
			}
		);
	}

	fetchData() {
		this.dataStorageService.getBooks();
	}
}