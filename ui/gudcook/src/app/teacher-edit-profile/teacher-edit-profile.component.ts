import { Component, OnInit, Input } from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

interface AppointmentsScheduling {
  id: string;
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-teacher-edit-profile',
  templateUrl: './teacher-edit-profile.component.html',
  styleUrls: ['./teacher-edit-profile.component.css']
})
export class TeacherEditProfileComponent implements OnInit {
  @Input() userData: string[];

  public appointmentsEdit:boolean = false;
  public isDisplayTimeSlot:boolean = true;
  public selectedDate:any;
  public minDate : {year: number, month: number, day: number};
  public maxDate : {year: number, month: number, day: number};

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  timeSlot:any = [];

  constructor(
    calendar: NgbCalendar
  ) {
    // const currentDate = new Date();
    
    // this.minDate = {
    //   year: currentDate.getFullYear(),
    //   month: currentDate.getMonth() + 1,
    //   day: currentDate.getDate()
    // };

    this.minDate = calendar.getToday();
    this.maxDate = calendar.getNext(calendar.getToday(), 'd', 30);

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
  }

  ngOnInit(): void {
    console.log('userData', this.userData)
    this.timeSlot =   this.generateTimeSlot("60", "10:00:00");
    console.log('this.timeSlot', this.timeSlot);
  }

  generateTimeSlot(step, yourTime){
    // interval in minutes
    const slotArray = [];
    const startMinutes = yourTime ? this.howManyMinutesPassed(yourTime) : 0;
    const parsedSlotSize = parseInt(step.toString(), 10);
    for (let i = startMinutes; i <= 24 * 60; i += parsedSlotSize) {
      let covertMin = this.convertMinutesToTimeFormat(i);
      slotArray.push({
        time: covertMin,
        timeformat: this.formatTime(covertMin),
        minutes: i,
      });
    }
    return [...slotArray];
  }

  howManyMinutesPassed(time) {
    const [hour, minutes] = time.split(':').map((value) => parseInt(value, 10));
    return hour * 60 + minutes;
  }

  public convertMinutesToTimeFormat(mins) {
    let h: string | number = Math.floor(mins / 60);
    let m: string | number = mins % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return `${h}:${m}:00`;
  }

  formatTime(time){
    const H = +time.substr(0, 2);
    const h = H % 12 || 12;
    const ampm = (H < 12 || H === 24) ? " AM" : " PM";
    return h + time.substr(2, 3) + ampm;
  }

  schedulingCalendar() {
    this.appointmentsEdit = true;
  }

  onDateSelection(selDate:NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = selDate;
    } else if (this.fromDate && !this.toDate && selDate.after(this.fromDate)) {
      this.toDate = selDate;
    } else {
      this.toDate = null;
      this.fromDate = selDate;
    }

    if(this.fromDate && this.toDate){
      this.isDisplayTimeSlot = true;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

}
