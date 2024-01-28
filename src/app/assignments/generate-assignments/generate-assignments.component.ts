import { Component } from '@angular/core';
import { AddAssignmentComponent } from '../add-assignment/add-assignment.component';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-generate-assignments',
  templateUrl: './generate-assignments.component.html',
  styleUrls: ['./generate-assignments.component.css']
})
export class GenerateAssignmentsComponent {
  numberOfAssignments: number = 0;

  constructor(private assignmentService: AssignmentService, private router: Router, private _snackBar: MatSnackBar ) { 
    this.assignmentService.oponed = false;
  }

  generateAssignments() {
    this.assignmentService.generateAndAddAssignments(this.numberOfAssignments).subscribe(assignments => {
      this._snackBar.open(this.numberOfAssignments + " assignments ont été ajouté", "Fermer", {
        duration: 2000,
      });
      this.router.navigate(['/list']);
    });
  }
  retour(){
    this.router.navigate(['/list']);
  }

}
