import { Component } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //users = ['pepe', 'joe', 'omar', 'jhon'];
  //activated:boolean = true; //cuando es importante (typescript)
 
 
  // name:string = 'ryan ray';
  // age: number;
  // address:{
  //   street: string;
  //   city: string;
  // };
  // hobbies: string[];

  // constructor(){
  //   this.age = 28;
  //   this.address = {
  //     street: 'luz aviñon',
  //     city:'mexico'
  //   };
  //   this.hobbies = ['nadar', 'leer', 'jugar']
  // }
  

  users:string[] = ['pepe', 'juan', 'jose']
  name:string = 'jhon carter';
  age: number = 28;
  posts = [];


  sayHello(){
    alert('hola!');
  }

  deleteUser(user){
    for(let i = 0; i <this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i,1)
      }
    }    
}

constructor(private dataService: DataService){
  this.dataService.getData().subscribe(data => {
    //console.log(data)
    this.posts = data;
  })
}



addUser(newUser){
  this.users.push(newUser.value)
  newUser.value = ''
  newUser.focus()
  //console.log(newUser.value)
  return false;
}


}
