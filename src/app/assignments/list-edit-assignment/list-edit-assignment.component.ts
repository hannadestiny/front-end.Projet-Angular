import { Component, ViewChild } from '@angular/core';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Assignment } from '../assignment.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmRenduComponent } from 'src/app/confirm-rendu/confirm-rendu.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-edit-assignment',
  templateUrl: './list-edit-assignment.component.html',
  styleUrls: ['./list-edit-assignment.component.css']
})
export class ListEditAssignmentComponent {
  assignments: Assignment[] = []; 
  dataSource: any;
  status: string = 'tous';
  mat: string='tous';
  filterValue: string = '';

  constructor (private assignmentsService:AssignmentService, private rout:Router,  public dialog: MatDialog,private _snackBar: MatSnackBar ){
    this.assignmentsService.oponed = false;
    this.dataSource = new MatTableDataSource(this.assignments);
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort | undefined;
  displayedColumns: string[] = ['position', 'name','matiere','nomProf', 'dateDeRendu', 'nomAuteur','rendu'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ngOnInit() {
    this.getAssignments();
  }

  
    
  po:Assignment[] = [];
  getAssignments()
  {

    this.assignmentsService.getNonRenduAssignments()
    .subscribe((assignments) => {
      this.assignments=assignments;
      this.po=this.assignments  ;
      this.dataSource = new MatTableDataSource(this.po);
      this.dataSource.sort = this.sort; 
      this.dataSource.paginator = this.paginator;
    });
  }

  sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a: { id: number; dateDeRendu: string; }, b: { id: number; dateDeRendu: string; }) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'dateDeRendu': // Add this case
          return compareDate(a.dateDeRendu, b.dateDeRendu, isAsc);
        default:
          return 0;
      }
    });
  }

  onUpdate(assignment: Assignment){
    
    this.assignmentsService.updateAssignment(assignment!).subscribe(message => {console.log(message);
      this._snackBar.open("Le devoir "+assignment.nomDevoir + " a été noté et rendu" , "Fermer", {
        duration: 2000,
      });  
      this.getAssignments();this.rout.navigate(['/listedit'])});
    
  } 

  openConfirmDialog(assignment: Assignment) {
    const dialogRef = this.dialog.open(ConfirmRenduComponent, {
      width: '400px',
      data : { assignmentName: assignment.nomDevoir }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        assignment.note = result.note;
        if (assignment.note >= 0 && assignment.note <= 20) {
          assignment.rendu = true;
        } else {
          assignment.rendu = false;
        }
        this.onUpdate(assignment);
      }
    });
    
  }


  applyGlobalFilter() {
    this.dataSource.filterPredicate = (data: Assignment, filter: string): boolean => {
      const searchString = JSON.parse(filter);
      const matchFilter = [];
 
      const inputMatch = data.nomDevoir.toLowerCase().includes(searchString.input.toLowerCase());

      const matMatch = searchString.mat === 'tous' || data.matiere === searchString.mat;

      const statusMatch = searchString.status === 'tous' || (data.rendu.toString() === searchString.status);
 
      matchFilter.push(inputMatch);
      matchFilter.push(matMatch);
      matchFilter.push(statusMatch);
 
      return matchFilter.every(Boolean);
    };
 
    this.dataSource.filter = JSON.stringify({input: this.filterValue, mat: this.mat, status: this.status});
  }
  
  
  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    
    this.applyGlobalFilter();
  }

  applyFilter1(event: Event) {
    this.applyGlobalFilter();
  }
 
  applyFilter2(event: Event) {
    this.applyGlobalFilter();
  }
  
}
  

function compare(a: number, b: number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function compareDate(a: string, b: string, isAsc: boolean) {
  const dateA = new Date(a);
  const dateB = new Date(b);
  return (dateA < dateB ? -1 : 1) * (isAsc ? 1 : -1);
}