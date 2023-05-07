import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  reviews = [
    {
      name: 'John Doe',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque mauris vel purus efficitur, vel venenatis turpis lobortis. Donec vel ligula vestibulum, ullamcorper eros vitae, efficitur ipsum.',
      date: 'March 1, 2022'
    },
    {
      name: 'Jane Doe',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque mauris vel purus efficitur, vel venenatis turpis lobortis. Donec vel ligula vestibulum, ullamcorper eros vitae, efficitur ipsum.',
      date: 'April 3, 2022'
    },
    {
      name: 'Mike Smith',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque mauris vel purus efficitur, vel venenatis turpis lobortis. Donec vel ligula vestibulum, ullamcorper eros vitae, efficitur ipsum.',
      date: 'May 5, 2022'
    },
    {
      name: 'Sarah Johnson',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque mauris vel purus efficitur, vel venenatis turpis lobortis. Donec vel ligula vestibulum, ullamcorper eros vitae, efficitur ipsum.',
      date: 'June 7, 2022'
    }
  ];
}

