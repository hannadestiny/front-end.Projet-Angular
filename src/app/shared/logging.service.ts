import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  
  log(assignmentName: string, action: string): void {
    console.log("Log: " + assignmentName + " a ete " + action);
  }
  
}
