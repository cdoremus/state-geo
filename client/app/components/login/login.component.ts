import {Component} from "angular2/core";
import UserService from '../common/user.service';

@Component({
  selector: 'login',
  templateUrl:  'app/components/login/login.html',
  styleUrls: ['app/components/login/login.css']
})
export default class LoginComponent {
  greeting: string;
  serviceData: any[];
  username: string;
  password: string;
  currentUser: any;

  constructor(private service: UserService) {
    this.greeting = 'LoginComponent!';
    this.serviceData = [];
    this.username = '';
    this.password = '';
    this.currentUser = {};
  }

  login() {
    this.currentUser = this.service.login(this.username, this.password);
    console.log("Current User: ", this.currentUser);
  }

}