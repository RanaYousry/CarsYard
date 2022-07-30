import { Component, OnInit } from '@angular/core';

// This component has the details of the car listing, the data is binded with html file
// This dummy data shouldn't be static, as another approach is to make the Add Car funtion
// work and output it on the page and of course save it in a database to make it persistent

@Component({
  selector: 'app-cars-card',
  templateUrl: './cars-card.component.html',
  styleUrls: ['./cars-card.component.sass'],
})
export class CarsCardComponent implements OnInit {
  cars = [
    {
      id: 'c1',
      name: 'Mercedes GLS 2022',
      type: 'Automatic',
      ac: 'yes',
      city: 'Alexandria',
      rate: '24.00',
      image: 'BG@2x.png',
    },
    {
      id: 'c2',
      name: 'Maybach Mercedes',
      type: 'Automatic',
      ac: 'yes',
      city: 'Cairo',
      rate: '25.00',
      image: 'Scroll Group - s 450@2x.png',
    },
    {
      id: 'c3',
      name: 'Mercedes V Class 2022',
      type: 'Manual',
      ac: 'yes',
      city: 'Gize',
      rate: '38.00',
      image: 'Scroll Group - V@2x.png',
    },
    {
      id: 'c4',
      name: 'Mercedes E Class 2022',
      type: 'Manual',
      ac: 'yes',
      city: 'Cairo',
      rate: '59.00',
      image: '16C600_023@2x.png',
    },
    {
      id: 'c5',
      name: 'BMW x7 2022',
      type: 'Automatic',
      ac: 'yes',
      city: 'Alexandria',
      rate: '83.00',
      image: '94-bmw-x7-2022-facelift-official-images-nose@2x.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
