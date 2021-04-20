import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ["https://education.launchcode.org/js-independent-track/chapters/html/tags.html#html-tags", "https://www.w3schools.com/tags/"];
  
  constructor() { }

  ngOnInit() {
  }

}
