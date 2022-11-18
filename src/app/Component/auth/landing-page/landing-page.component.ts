import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  hiddenforvirtualbackground = false;
  hiddenforcrossplatform = false;
  hiddenforpassprotection = false;
  hiddenforencryption = false;
  hiddenforscheduling = false;
  hiddenforassignpermission = false;
  hiddenforreminder = false;
  hiddenfortranscription = false;
  hiddenforbreakoutrooms = false;
  hiddenforscreensharing = false;
  hiddenforwhiteboarding = false;
  hiddenforfilesharing = false;
  hiddenformessaging = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleforvirtualbackground() {
    this.hiddenforvirtualbackground = !this.hiddenforvirtualbackground;
    this.hiddenforcrossplatform = false;
    this.hiddenforpassprotection = false;
    this.hiddenforencryption = false;
    this.hiddenforscheduling = false;
    this.hiddenforassignpermission = false;
    this.hiddenforreminder = false;
    this.hiddenfortranscription = false;
    this.hiddenforbreakoutrooms = false;
    this.hiddenforscreensharing = false;
    this.hiddenforwhiteboarding = false;
    this.hiddenforfilesharing = false;
    this.hiddenformessaging = false;
  }

  toggleforcrossplatform() {
    this.hiddenforcrossplatform = !this.hiddenforcrossplatform;
    this.hiddenforvirtualbackground = false;
    this.hiddenforpassprotection = false;
    this.hiddenforencryption = false;
    this.hiddenforscheduling = false;
    this.hiddenforassignpermission = false;
    this.hiddenforreminder = false;
    this.hiddenfortranscription = false;
    this.hiddenforbreakoutrooms = false;
    this.hiddenforscreensharing = false;
    this.hiddenforwhiteboarding = false;
    this.hiddenforfilesharing = false;
    this.hiddenformessaging = false;
  }

  toggleforpassprotection(){
    this.hiddenforpassprotection =!this.hiddenforpassprotection;
    this.hiddenforcrossplatform = false;
    this.hiddenforvirtualbackground = false;
    this.hiddenforencryption = false;
    this.hiddenforscheduling = false;
    this.hiddenforassignpermission = false;
    this.hiddenforreminder = false;
    this.hiddenfortranscription = false;
    this.hiddenforbreakoutrooms = false;
    this.hiddenforscreensharing = false;
    this.hiddenforwhiteboarding = false;
    this.hiddenforfilesharing = false;
    this.hiddenformessaging = false;
  }

  toggleforencryption(){
    this.hiddenforencryption =! this.hiddenforencryption;
    this.hiddenforpassprotection = false;
    this.hiddenforcrossplatform = false;
    this.hiddenforvirtualbackground = false;
    this.hiddenforscheduling = false;
    this.hiddenforassignpermission = false;
    this.hiddenforreminder = false;
    this.hiddenfortranscription = false;
    this.hiddenforbreakoutrooms = false;
    this.hiddenforscreensharing = false;
    this.hiddenforwhiteboarding = false;
    this.hiddenforfilesharing = false;
    this.hiddenformessaging = false;
  }

  toggleforscheduling(){
    this.hiddenforscheduling =! this.hiddenforscheduling;
    this.hiddenforpassprotection = false;
    this.hiddenforcrossplatform = false;
    this.hiddenforvirtualbackground = false;
    this.hiddenforencryption = false;
    this.hiddenforassignpermission = false;
    this.hiddenforreminder = false;
    this.hiddenfortranscription = false;
    this.hiddenforbreakoutrooms = false;
    this.hiddenforscreensharing = false;
    this.hiddenforwhiteboarding = false;
    this.hiddenforfilesharing = false;
    this.hiddenformessaging = false;
  }

  toggleforassignpermission(){
    this.hiddenforassignpermission =! this.hiddenforassignpermission;
    this.hiddenforscheduling = false;
    this.hiddenforpassprotection = false;
    this.hiddenforcrossplatform = false;
    this.hiddenforvirtualbackground = false;
    this.hiddenforencryption = false;
    this.hiddenforreminder = false;
    this.hiddenfortranscription = false;
    this.hiddenforbreakoutrooms = false;
    this.hiddenforscreensharing = false;
    this.hiddenforwhiteboarding = false;
    this.hiddenforfilesharing = false;
    this.hiddenformessaging = false;
  }

  toggleforreminder(){
    this.hiddenforreminder =! this.hiddenforreminder;
    this.hiddenforassignpermission = false;
    this.hiddenforscheduling = false;
    this.hiddenforpassprotection = false;
    this.hiddenforcrossplatform = false;
    this.hiddenforvirtualbackground = false;
    this.hiddenforencryption = false;
    this.hiddenfortranscription = false;
    this.hiddenforbreakoutrooms = false;
    this.hiddenforscreensharing = false;
    this.hiddenforwhiteboarding = false;
    this.hiddenforfilesharing = false;
    this.hiddenformessaging = false;
  }

  togglefortranscription(){
    this.hiddenfortranscription =! this.hiddenfortranscription;
    this.hiddenforreminder = false;
    this.hiddenforassignpermission = false;
    this.hiddenforscheduling = false;
    this.hiddenforpassprotection = false;
    this.hiddenforcrossplatform = false;
    this.hiddenforvirtualbackground = false;
    this.hiddenforencryption = false;
    this.hiddenforbreakoutrooms = false;
    this.hiddenforscreensharing = false;
    this.hiddenforwhiteboarding = false;
    this.hiddenforfilesharing = false;
    this.hiddenformessaging = false;
  }

  toggleforbreakoutrooms(){
    this.hiddenforbreakoutrooms =! this.hiddenforbreakoutrooms;
    this.hiddenfortranscription = false;
    this.hiddenforreminder = false;
    this.hiddenforassignpermission = false;
    this.hiddenforscheduling = false;
    this.hiddenforpassprotection = false;
    this.hiddenforcrossplatform = false;
    this.hiddenforvirtualbackground = false;
    this.hiddenforencryption = false;
    this.hiddenforscreensharing = false;
    this.hiddenforwhiteboarding = false;
    this.hiddenforfilesharing = false;
    this.hiddenformessaging = false;
  }

  toggleforscreensharing(){
    this.hiddenforscreensharing =! this.hiddenforscreensharing;
    this.hiddenforbreakoutrooms = false;
    this.hiddenfortranscription = false;
    this.hiddenforreminder = false;
    this.hiddenforassignpermission = false;
    this.hiddenforscheduling = false;
    this.hiddenforpassprotection = false;
    this.hiddenforcrossplatform = false;
    this.hiddenforvirtualbackground = false;
    this.hiddenforencryption = false;
    this.hiddenforwhiteboarding = false;
    this.hiddenforfilesharing = false;
    this.hiddenformessaging = false;
  }

  toggleforwhiteboarding(){
    this.hiddenforwhiteboarding =! this.hiddenforwhiteboarding;
    this.hiddenforscreensharing = false;
    this.hiddenforbreakoutrooms = false;
    this.hiddenfortranscription = false;
    this.hiddenforreminder = false;
    this.hiddenforassignpermission = false;
    this.hiddenforscheduling = false;
    this.hiddenforpassprotection = false;
    this.hiddenforcrossplatform = false;
    this.hiddenforvirtualbackground = false;
    this.hiddenforencryption = false;
    this.hiddenforfilesharing = false;
    this.hiddenformessaging = false;
  }

  toggleforfilesharing(){
    this.hiddenforfilesharing =! this.hiddenforfilesharing;
    this.hiddenforwhiteboarding = false;
    this.hiddenforscreensharing = false;
    this.hiddenforbreakoutrooms = false;
    this.hiddenfortranscription = false;
    this.hiddenforreminder = false;
    this.hiddenforassignpermission = false;
    this.hiddenforscheduling = false;
    this.hiddenforpassprotection = false;
    this.hiddenforcrossplatform = false;
    this.hiddenforvirtualbackground = false;
    this.hiddenforencryption = false;
    this.hiddenformessaging = false;
  }

  toggleformessaging(){
    this.hiddenformessaging =! this.hiddenformessaging;
    this.hiddenforfilesharing = false;
    this.hiddenforwhiteboarding = false;
    this.hiddenforscreensharing = false;
    this.hiddenforbreakoutrooms = false;
    this.hiddenfortranscription = false;
    this.hiddenforreminder = false;
    this.hiddenforassignpermission = false;
    this.hiddenforscheduling = false;
    this.hiddenforpassprotection = false;
    this.hiddenforcrossplatform = false;
    this.hiddenforvirtualbackground = false;
    this.hiddenforencryption = false;
  }

  hiddenall(){
    this.hiddenformessaging = false;
    this.hiddenforfilesharing = false;
    this.hiddenforwhiteboarding = false;
    this.hiddenforscreensharing = false;
    this.hiddenforbreakoutrooms = false;
    this.hiddenfortranscription = false;
    this.hiddenforreminder = false;
    this.hiddenforassignpermission = false;
    this.hiddenforscheduling = false;
    this.hiddenforpassprotection = false;
    this.hiddenforcrossplatform = false;
    this.hiddenforvirtualbackground = false;
    this.hiddenforencryption = false;
  }
}
