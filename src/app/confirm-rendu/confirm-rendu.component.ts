import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-rendu',
  templateUrl: './confirm-rendu.component.html',
  styleUrls: ['./confirm-rendu.component.css']
})
export class ConfirmRenduComponent {

constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<ConfirmRenduComponent>
) {}
}


