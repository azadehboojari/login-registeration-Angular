import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { Router} from '../../../node_modules/@angular/router';
@Component({
  selector: 'RegisterComponent',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user:any;
  private loggedUser:any;


  constructor(
    private us:UserService, 
    private router:Router
  ) { 
    
  }

  ngOnInit() {
    this.init();
    this.us.logout();
  }

  init(){
    this.user={
      name:"",
      last:"",
      email:"",
      password:"",
      errors:[]
    };
    this.loggedUser={
      email:"",
      password:"",
      errors:[]
    }
  }

  create(){
    this.us.register(this.user, (data)=>{
      if (data.errors){
        
        this.user.errors=data.errors
      }else{
        this.init();
        return this.router.navigateByUrl("/home");

      }
  })
  }
  login(){
    this.us.login(this.loggedUser, (data)=>{
      if (data.errors){
        this.loggedUser.errors=data.errors
      }else {
        this.init();
        return this.router.navigate(["/home"]);

      }
    })
  
  }

}
