import { Component, EventEmitter,OnInit, Output, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Route, Router } from '@angular/router';

import { AuthService } from 'src/app/shared/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})


export class AddAssignmentComponent {
  a : Assignment | undefined;
  titre = "Formulaire d'ajout de devoir";
  nomDevoir:string="";
  dateDeRendu:Date= new Date();
  matiere: string = "";
  remarque: string = "";
  nomProf: string = "";
  nomAuteur :string ="";
  note: any;
  rendu: boolean = false;

  isChecked : boolean | undefined; 
  
  
    constructor(private assignmentService : AssignmentService,
      private router :Router, 
      private authService : AuthService,
      private _formBuilder: FormBuilder,
      private _snackBar: MatSnackBar  ){
      this.assignmentService.oponed = false;
        
    }

 
    isAdmin(){
  
      return this.authService.isAdmmin();
    }
  
   onSubmit(event: any) {
    if (this.matiere === "Angular") {
      this.nomProf = "M. Buffa";
    } else if (this.matiere === "Management") {
      this.nomProf= "M. Tounsi";
    } else if (this.matiere === "Statistique") {
      this.nomProf = "M. Donati";
    } else if (this.matiere === "Java") {
      this.nomProf = "M. Lahire";
    }else if(this.matiere === "OIB"){
      this.nomProf = "Mme. Mirbel";
    }else if(this.matiere === "Base de données"){
      this.nomProf = "M. Galli";
    } else if (this.matiere === "Communication") {
      this.nomProf = "M. Arnault";
    }

    if (this.nomDevoir === "") {
      alert("Vous devez entrer un nom de devoir");
      return;
    }
    if (this.matiere === "") {
      alert("Vous devez entrer une matière");
      return;
    }
    if (this.nomAuteur === "") {
      alert("Vous devez entrer un nom d'auteur");
      return;
    }
   
  
    if (this.isChecked)  {
      this.rendu = true;
    } else {
      this.rendu= false;}

   
    
    event.preventDefault();
    const newAssignment = new Assignment();
    newAssignment.id=Math.floor(Math.random() * 1000);
    newAssignment.nomDevoir= this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.matiere = this.matiere;
    newAssignment.auteur = this.nomAuteur;
    newAssignment.note = this.note;
    newAssignment.remarque = this.remarque;
    newAssignment.rendu = this.rendu;
    newAssignment.nomProf = this.nomProf;
    
    this.assignmentService.addAssignment(newAssignment).subscribe(message => {console.log(message);
      this._snackBar.open("Le devoir "+ this.nomDevoir +" a été ajouté", "Fermer", {
        duration: 2000,
      });
      this.router.navigate(['list'])});
  }

  retour(){
    this.router.navigate(['/list']);
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
