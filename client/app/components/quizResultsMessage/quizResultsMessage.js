import {quizResultsMessageDirective} from './quizResultsMessage.component';
import {QuizResultsMessageService as quizResultsMessageService} from './quizResultsMessage.service';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const quizResultsMessage = angular.module('quizResultsMessage', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('quizResultsMessage', {
      url: '/quizResultsMessage',
      template: '<quiz-results-message></quiz-results-message>' 
    })
  })
  .directive('quizResultsMessage', quizResultsMessageDirective)
  .service('quizResultsMessageService', quizResultsMessageService);
