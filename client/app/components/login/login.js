//import {loginDirective} from './login.directive';
import {loginDirective} from './login.component';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {LoginService as loginService} from '../common/login.service';


export const login = angular.module('login', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('login', {
      url: '/login',
      template: '<login></login>' 
    })
  })
  .directive('login', loginDirective)
  .service('loginService', loginService);