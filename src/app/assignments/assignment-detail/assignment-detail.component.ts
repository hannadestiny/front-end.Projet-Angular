import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from '../../shared/assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
 
  assignmentTransmis: Assignment | any;
  check:boolean = false;
  note: number | undefined;   
  

  constructor(private assignmentService: AssignmentService,
              private route : ActivatedRoute,
              private router : Router,
              private authService : AuthService,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) {
              this.assignmentService.oponed = false;
                
              }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')) ;
    this.assignmentService.getAssignment(id).subscribe(a => this.assignmentTransmis = a);
  }

  onAssignmentRendu() {
    this.assignmentTransmis!.rendu = true;
    this.assignmentTransmis!.note = this.note;


    this.assignmentService.updateAssignment(this.assignmentTransmis!)
    .subscribe(message => {console.log(message);this.router.navigate(['assignment',this.assignmentTransmis!.id])});
    this.check=false;

  }


  onDelete(){
    this.assignmentService.deletedAssignment(this.assignmentTransmis!).subscribe(message => {console.log(message);
      this._snackBar.open("Le devoir "+this.assignmentTransmis.nomDevoir + " a été supprimé" , "Fermer", {
        duration: 2000,
      });  
      this.router.navigate(['/list'])});
    
  } 

  rendu()
  {
    if (this.assignmentTransmis.note === undefined)
      return false;
    else return true
  }

  openConfirmDialog() {
    if (this.assignmentTransmis) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data : { assignmentName: this.assignmentTransmis.nomDevoir }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.onDelete();
        }
      });
    }
  
   
  }
  
  onedit(){
    this.router.navigate(['assignment',this.assignmentTransmis!.id,'edit']);
  }
  
  notess(){
    if (this.note !== undefined && this.note >= 0 && this.note <= 20 && this.note !== null && !isNaN(this.note) ) {
      return true;
    } else {
    return false;}
  }

  isAdmin(){
  
    return this.authService.isAdmmin();
  }

  isLogged(){
    console.log(this.authService.isConnect());
    
    return this.authService.isConnect();

  }
  retour(){
    this.router.navigate(['list']);
  }

  donati()
  {
    return this.assignmentTransmis.nomProf === "M. Donati";
  }

  buffa()
  {
    return this.assignmentTransmis.nomProf === "M. Buffa";
  }

  tounsi()
  {
    return this.assignmentTransmis.nomProf === "M. Tounsi";
  }

  lahire()
  {
    return this.assignmentTransmis.nomProf === "M. Lahire";
  }

  mirbel()
  {
    return this.assignmentTransmis.nomProf === "Mme. Mirbel";
  }

  arnault(){
    return this.assignmentTransmis.nomProf === "M. Arnault";
  }

  Galli(){
    return this.assignmentTransmis.nomProf === "M. Galli";
  }

  

  remarque(){
    if(this.assignmentTransmis.remarque === undefined){
      return false;
    }
    else{
      return true;
    }
  }
}
