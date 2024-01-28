import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-log-assignment',
  templateUrl: './log-assignment.component.html',
  styleUrls: ['./log-assignment.component.css']
})
export class LogAssignmentComponent {
  username: any;
  password: any;
  user: any;
  hide = true;
  
  form :FormGroup=this.fb.group({
    Username:['',Validators.required],
    Password:['',Validators.required]
  });

  constructor(private authService : AuthService, private fb: FormBuilder, private router:Router,private _snackBar: MatSnackBar){ }
    ngOnInit(): void {
    }

    titre = "Veuillez vous connecter!!";

    login(){
      let user= this.authService.logIn(this.form.value.Username,this.form.value.Password);
      if (!user){
        console.log("non connecte");
        this._snackBar.open("Veuillez vérifier vos identifiants", "OK", {
          duration: 2000,
        });
      }
      else{
        console.log(" connecte");
        if(this.authService.isAdmmin()){
        this._snackBar.open("Bienvenue "+this.form.value.Username+" vous êtes admin", "OK", {
          duration: 2000,
        });
      }
      else{
        this._snackBar.open("Bienvenue "+this.form.value.Username+" vous êtes utilisateur", "OK", {
          duration: 2000,
        });
      }
    }
      this.router.navigate(['home']);
      
    }
}

