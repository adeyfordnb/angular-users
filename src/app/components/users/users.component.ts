import { Component, OnInit } from '@angular/core';
import {UsersListService} from "../../services/users-list.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  deleteUserName:string;
  users:any;
  user = {
    name: '',
    username: '',
    email: '',
  };

  addSuccess:boolean = false;
  addError:boolean = false;
  deleteUser:boolean = false;

  constructor(
    public userslist: UsersListService
  ) { }

  ngOnInit() {
    this.userslist.getUsers().subscribe( users => {
      console.log(users);
      this.users = users;
    }, error => {
      console.log(error);
    })
  }

  //Method add user
  addUser(form){
    this.userslist.addUser(this.user).subscribe( user=> {
      console.log(user);
      this.users.unshift(user);
      form.resetForm();
      this.addSuccess = true;
      setTimeout( ()=>{
        this.addSuccess = false;
      }, 2000);
    }, error => {
      this.addError = true;
    } )
  }

  //Method remove user
  removeUser(i){
    this.userslist.addUser(this.user).subscribe( user=> {
      this.deleteUserName = this.users[i].name;
      this.users.splice(i, 1);
      this.deleteUser = true;
      setTimeout( ()=> {
        this.deleteUser = false;
      }, 2000)
    })
  }


}
