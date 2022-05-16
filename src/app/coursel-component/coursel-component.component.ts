import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursel-component',
  templateUrl: './coursel-component.component.html',
  styleUrls: ['./coursel-component.component.css'],
})
export class CourselComponentComponent implements OnInit {
  products = [
    {
      id: '1000',
      name: 'Food Distribution',
      description: 'Product Description',
      image: '../../assets/Images/food-img.png',
    },
    {
      id: '1001',

      name: 'Basic Medical Aid',
      description: 'Product Description',
      image: '../../assets/Images/medical-img.png',
    },
    {
      id: '1002',

      name: 'Basic Grocery',
      description: 'Product Description',
      image: '../../assets/Images/grocery-img.png',
    },
    {
      id: '1003',

      name: 'Food Distribution',
      description: 'Product Description',
      image: '../../assets/Images/food-img.png',
    },
    {
      id: '1003',

      name: 'Basic Medical Aid',
      description: 'Product Description',
      image: '../../assets/Images/medical-img.png',
    },
    {
      id: '1003',

      name: 'Basic Grocery',
      description: 'Product Description',
      image: '../../assets/Images/grocery-img.png',
    },
  ];

  responsiveOptions;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {}
}
