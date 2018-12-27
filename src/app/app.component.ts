import { Component } from '@angular/core';

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
  name:string;
  age: number;

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

addUser(newUser){
  this.users.push(newUser.value)
  newUser.value = ''
  newUser.focus()
  //console.log(newUser.value)
  return false;
}


}
