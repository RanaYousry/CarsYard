import { Component } from '@angular/core';

//This component is the main page that contains, listing of the cars and filter and modal of adding new car
// Form of adding new car is not working functionally

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.sass'],
})
export class CarsListComponent {
  // sortCars = (cars, ascending) => {
  //   return cars.sort((carA, carB) => {
  //     if (ascending) {
  //       return carA.id > carB.id ? 1 : -1;
  //     } else {
  //       return carA.id < carB.id ? 1 : -1;
  //     }
  //   });
  // };
  enteredValue = {
    name: '',
    rate: '',
    image: '',
    city: '',
    transmission: '',
    ac: '',
  };
  newCar = {
    name: '',
    rate: '',
    image: '',
    city: '',
    transmission: '',
    ac: '',
  };
  onAddCar() {
    this.newCar = this.enteredValue;
  }
}
