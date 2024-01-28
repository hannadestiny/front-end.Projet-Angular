import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AssignmentService {
  constructor() {}

  generateAssignments(n: number) {
    
    console.log(`Generating ${n} assignments`);
   
  }
}

