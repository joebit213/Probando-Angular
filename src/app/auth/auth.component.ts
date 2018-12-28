import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public email: string;
  public password:string
  constructor(
   public authService: AuthService,
   public router: Router
  ) { }

  ngOnInit() {
  }
  // onSubmitAddUser(){
  //   this.authService.registerUser(this.email, this.password)
  //   .then((res)=>{
  //     console.log('BIEN!!!!')
  //     console.log(res)
  //   }).catch((err)=>{
  //    console.log(err)
  //   })
  // }


  // onSubmitLogin(){
  //   this.authService.loginEmail(this.email, this.password)
  //   .then((res)=>{
  //     this.router.navigate(['/map'])
  //   }).catch((err)=>{
  //     console.log(err)
  //     this.router.navigate([''])
  //   })
  // }


}
