// countdown-timer.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerService {
  private timeLeftSource = new BehaviorSubject<string>('');

  // Observable string streams
  currentTimeLeft = this.timeLeftSource.asObservable();

  constructor() {}

  // Service message commands
  updateTimeLeft(time: string) {
    this.timeLeftSource.next(time);
  }
}