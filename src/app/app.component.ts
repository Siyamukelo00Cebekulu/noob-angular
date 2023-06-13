import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent
{

	name= 'Siya'

	
	imgUrl = 'https://picsum.photos/id/237/500/500'
	image = [
		'https://picsum.photos/id/238/500/500',
		'https://picsum.photos/id/227/500/500',
		'https://picsum.photos/id/247/500/500'
	]
	currentDate = new Date()
	cost = 2000
	temp = 1.3567
	pizza =
	{
		toppings : ['pepperoni', 'chesse'],
		size : 'large'
	}



	blueClass = true
	fontSize = 20


	changeImage(e: KeyboardEvent)
	{
		return this.imgUrl = (e.target as HTMLInputElement).value
	}
	
	getName() {
		return this.name
	}

	logImg(event: string)
	{
		console.log(event)
	}
}
