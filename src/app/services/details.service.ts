import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }
  Details = [
    {
      id:1,
      foodName:"Sandwiches",
      foodDetails:"Slices of meat, cheese, or other food placed between two slices of bread.",
      foodPrice:"200",
      foodImage:"https://images.unsplash.com/photo-1619531038896-deaff53d151a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
    },
    {
      id:2,
      foodName:"Burger",
      foodDetails:"Cheese Grilled Burger with multiple vegetables hand picked from the farms for the rich and amazing taste.",
      foodPrice:"200",
      foodImage:"https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80"
    },
    {
      id:3,
      foodName:"Mojito",
      foodDetails:"Cooled mojito freshly served with herbs and freshly picked lemon with sparkling water.",
      foodPrice:"150",
      foodImage:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id:4,
      foodName:"Pizza",
      foodDetails:"Hand toosed base with the richness of the vegetables and cheese spread all over the base and crust as well.",
      foodPrice:"450",
      foodImage:"https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1343&q=80"
    },
    {
      id:5,
      foodName:"spaghetti",
      foodDetails:"spaghetti",
      foodPrice:"450",
      foodImage:"https://images.unsplash.com/photo-1627042633145-b780d842ba45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id:6,
      foodName:"Frech Fires",
      foodDetails:"Hand picked potatos with freshly chooped as the piece of potato that have een air fried without oil.",
      foodPrice:"450",
      foodImage:"https://images.unsplash.com/photo-1630431341973-02e1b662ec35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },

  ]
}
