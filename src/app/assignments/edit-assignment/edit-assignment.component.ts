import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from '../../shared/assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent {
  assignment :Assignment | any;

  titre = "Formulaire de modification de devoir";
  assignmentForm: any;

  isChecked : boolean | undefined;
  
  

  constructor(private assignmentService: AssignmentService,
              private route : ActivatedRoute,
              private authService : AuthService,
              private router : Router,
              private _formBuilder: FormBuilder,
              private _snackBar: MatSnackBar) {
    this.assignmentService.oponed = false;
              }



  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')) ;
    this.assignmentService.getAssignment(id).subscribe(a => this.assignment = a);

    this.assignmentForm = new FormGroup({
      nomDevoir: new FormControl(),
      matiere: new FormControl(),
      dateDeRendu: new FormControl(),
      auteur: new FormControl(),
      note: new FormControl(),
      remarque: new FormControl(),
      
    });

    this.assignmentForm.patchValue(this.assignment);
  
  }



  isAdmin(){
  
    return this.authService.isAdmmin();
  }  


  onSave(event:any){
   

    if (this.assignment.matiere === "Angular") {
      this.assignment.nomProf = "M. Buffa";
    } else if (this.assignment.matiere === "Management") {
      this.assignment.nomProf= "M. Tounsi";
    } else if (this.assignment.matiere === "Statistique") {
      this.assignment.nomProf = "M. Donati";
    } else if (this.assignment.matiere === "Java") {
      this.assignment.nomProf = "M. Lahire";
    }else if(this.assignment.matiere === "OIB"){
      this.assignment.nomProf = "Mme. Mirbel";
    }else if (this.assignment.matiere === "Communication") {
      this.assignment.nomProf = "M. Arnault";
    }else if (this.assignment.matiere === "Base de données") {
      this.assignment.nomProf = "M. Galli";
    }

    if (this.isChecked ) {
      this.assignment.rendu = true;
    }
      
    this.assignmentService.updateAssignment(this.assignment).
    subscribe(message => {console.log(message);
      this._snackBar.open("Le devoir "+this.assignment.nomDevoir + " a été modifié" , "Fermer", {
        duration: 2000,
      });  
      this.router.navigate(['/assignment',this.assignment.id])});
    
  }


  retour(){
    this.router.navigate(['/assignment',this.assignment.id]);
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  seventhFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
}
