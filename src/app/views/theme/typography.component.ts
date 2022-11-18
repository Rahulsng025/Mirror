import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {AddMeetingService} from '../../Service/add-meeting.service';
import { Router } from '@angular/router';
import {GetMeetingDataService} from '../../Service/get-meeting-data.service'
import {DeleteMeetingService} from '../../Service/delete-meeting.service'
import {UpdateMeetingService} from '../../Service/update-meeting.service'

import {formatDate } from '@angular/common';
import {Inject,LOCALE_ID } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
@Component({
  templateUrl: 'typography.component.html'
})
export class TypographyComponent {

  constructor(private formBuilder: FormBuilder,private meetserv:AddMeetingService,private router: Router,private getmeet:GetMeetingDataService,
    private delmeet:DeleteMeetingService, @Inject(LOCALE_ID) public locale: string,private updateserv:UpdateMeetingService) { }

  meetingData = this.formBuilder.group({
  topic:'',
  date:'',
  time:'',
  hour:'',
  min:'',
  time_zone:''
  });

  show=true;
  hour =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  min =[0,15,30,45];
  timezone=["(GMT-11:00) Midway Island, Samoa",
    "(GMT-11:00) Pago Pago(GMT-11:00) Pago Pago","(GMT+5:30) Mumbai, Kolkata, New Delhi(GMT+5:30) Mumbai, Kolkata, New Delhi"];
  add(){
    this.show=false;
  }
  onSubmit(){

    var meetdata=this.formBuilder.group({
      topic:this.meetingData.controls.topic.value,
      duration:new Date(new Date(this.meetingData.controls.date.value+' '+this.meetingData.controls.time.value).getTime() + 1000 * 60 * 60*this.meetingData.controls.hour.value+1000 * 60 *this.meetingData.controls.min.value),
      time_slot:this.meetingData.controls.date.value+' '+this.meetingData.controls.time.value,
      time_zone:this.meetingData.controls.time_zone.value
      
    })
 if(this.edit==false){
  this.meetserv.addMeeting(meetdata.value).subscribe((data)=>{
    alert("Meeting Scheduled");

    this.tab=1;
    this.meetings(); 

  })
 }
    
    if(this.edit){
      this.updateserv.updateMeeting(meetdata.value,this.editId).subscribe((data)=>{
        alert("Meeting Updated");
      })
    }

  }

  ngOnInit(): void {
  this.meetings();  

  }
  meetData;
  date;
  tab=0;
  edit=false;
  editId;
  editObj;
  edittab;
  Edit(id){
    if(confirm("Are you sure you want to edit this meeting?")){
this.edittab=this.tab;
    this.editId=id;
    this.edit=true;
    this.tab=2;
    this.meetings();}
  }
  doEdit(){
this.onSubmit();
    this.edit=false;
    this.tab=this.edittab;
    this.meetings()
  }
meetings(){
  this.getmeet.getMeetingData().subscribe((data)=>{
    this.meetData=data;

if(this.edit){
  for(let i=0;i<this.meetData.length;i++){
    if(this.editId==this.meetData[i].id){
      this.editObj=this.meetData[i];
      console.log(this.editObj);
      this.meetingData.controls.topic.setValue(this.meetData[i].topic);
      this.meetingData.controls.date.setValue(this.meetData[i].time_slot.split(" ",1));
      this.meetingData.controls.time.setValue(this.meetData[i].time_slot.split(" ").pop());
      this.meetingData.controls.time_zone.setValue(this.meetData[i].time_zone);
        let  t1:any=new Date(this.meetData[i].duration).getTime()
        let t2:any=new Date(this.meetData[i].time_slot).getTime()
        let ms=t1-t2
        let h=~~((ms/1000/60)/60)
        let m=(ms/1000/60)%60;
        this.meetingData.controls.hour.setValue(h);
        this.meetingData.controls.min.setValue(m);
      return;
    }
    }
}

 
  });
}
checkDate(date){
  if(new Date(date)<new Date()){
    return true;
  }
  return false;
}

deleteMeet(id){
 if(confirm("Are you sure you want to delete this meeting?")){
  this.delmeet.deleteMeet(id).subscribe((data)=>{
    this.meetings();
    alert("Meeting Successfully Deleted");
        
  });
 }
  
}
startMeet(topic){
  localStorage.setItem('Topic',topic);
  this.router.navigate(['preview'])

}

}

