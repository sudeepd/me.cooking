import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User, Card, Dish, BannerData} from '../models';
import { GudcookService } from '../gudcook.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {    
  bannerData : BannerData = {
    buttonRoute : ['/signup'],
    buttonText : 'Signup today',
    content : 'Learn to cook live with anyone locally or globally',
    heading : 'Welcome to Gudcook',
    image : '/assets/landing-page-top.jpg',
    overlay : true
  };
  items : Card[] = [
    {
      image : '/assets/home-our-story.jpg',
      heading : "Story",
      text :  "This platform is simply a way to connect people who want to learn to share their cooking with those who need and want to learn. Build a community share an experience and build a new positive connection"
    } ,
    {
      image : '/assets/home-middle-card.jpg',
      heading : "What we offer",
      text :  "Donation based classes that are live and interactive. All proceeds go to your 'chef' - many who have reduced incomes due to COVID"
    } ,
    {
      image : '/assets/home-right.jpg',
      heading : "Join Us",
      text :  "Build a community of food lovers  who may be pro chefs, culinary students or amazing home cooks. Help supplement income for out of work food industry people"
    } 
  ]


  constructor( private gudcookService : GudcookService,
    private router : Router) { 
  }
  
  ngOnInit() {    

  }
}
