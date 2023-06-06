import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return of([
      {
        "title": "PROVIDING SERVICES AT YOUR DOOR",
        "sentence1": "has an important role in making",
        "sentence2": "supplies and services available to customers and their",
        "sentence3": "patients during this critical time. This includes services",
        "sentence4": "from various domains. Our aim is to aid you. As much we can.",
        "heading": "COVID-19 GUIDLINES",
        "headingSentence1": "Please remember to adhere all covid-19 guidelines. Precaution is key to survive this pandemic. Stay at home and Stay safe.",
        "footer": " All rights are reserved:",
        "home": "Home",
        "collection": "Collection",
        "products": "Products",
        "about": "About",
        "contact": "Contact",
        "faq": "FAQ",
        "bodySpray": "Body Spray",
        "weekelyDiscount": "WEEKLY DISCOUNT",
        "topSellings": "TOP SELLINGS",
        "macc": "MACC",
        "rupees": "₹ 500",
        "covid": "COVID-19",
        "guide": "GUIDLINES",
        "provideServices": "PROVIDING SERVICES",
        "atYourDoor": "AT YOUR DOOR",
        "maccEssentials": " MACC Essentials "

      }
    ]
    )
  }
  // get() {
  //   return this.http.get('assests/products-orders-small.json');
  // }
}
