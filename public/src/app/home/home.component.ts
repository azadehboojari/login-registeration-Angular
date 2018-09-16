import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router} from '@angular/router';


@Component({
  selector: 'HomeComponent',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private user:any;

  constructor(
    private us:UserService, 
    private router:Router

  ) { }

  ngOnInit() {
   this.us.session((data)=>{
      if(data.errors){
        this.router.navigate(["/"])
      }else {
        this.user =data;
      }
   })
  }

}
