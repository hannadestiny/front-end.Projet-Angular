import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule }from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentsComponent } from './assignments/assignments.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import  {MatToolbarModule} from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentService } from './shared/assignment.service';
import { RouterModule, Routes } from '@angular/router';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth.guard';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { NgOptimizedImage } from '@angular/common'
import { LogAssignmentComponent } from './assignments/log-assignment/log-assignment.component';
import { logGuard } from './shared/log.guard';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { ListAssignmentComponent } from './assignments/list-assignment/list-assignment.component';
import { ListEditAssignmentComponent } from './assignments/list-edit-assignment/list-edit-assignment.component';
import { ListDeleteAssignmentComponent } from './assignments/list-delete-assignment/list-delete-assignment.component';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { GenerateAssignmentsComponent } from './assignments/generate-assignments/generate-assignments.component';
import { ConfirmRenduComponent } from './confirm-rendu/confirm-rendu.component';



const routes: Routes = [
  {path: '', component: ListAssignmentComponent},
  {path: 'home', component: ListAssignmentComponent},
  {path: 'add', component: AddAssignmentComponent, canActivate:[logGuard]},
  {path: 'list', component: ListAssignmentComponent},
  {path: 'listdelete', component: ListDeleteAssignmentComponent, canActivate:[authGuard]},
  {path: 'listedit', component: ListEditAssignmentComponent, canActivate:[authGuard]},
  {path: 'assignment/:id', component: AssignmentDetailComponent},
  {path: 'assignment/:id/edit', component: EditAssignmentComponent, canActivate:[logGuard]},
  {path: 'generate', component: GenerateAssignmentsComponent, canActivate:[authGuard]},
  {path: 'log', component: LogAssignmentComponent},
  
];
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    LogAssignmentComponent,
    ToolbarComponent,
    SidenavComponent,
    ListAssignmentComponent,
    ListEditAssignmentComponent,
    ListDeleteAssignmentComponent,
    ConfirmDialogComponent,
    GenerateAssignmentsComponent,
    ConfirmRenduComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatDividerModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
    FormsModule, MatDatepickerModule, MatNativeDateModule, 
    MatToolbarModule,MatSidenavModule,MatSelectModule, MatListModule,MatCheckboxModule,
    RouterModule.forRoot(routes), MatSlideToggleModule,ReactiveFormsModule,HttpClientModule,MatTableModule,
    MatSortModule, MatPaginatorModule,MatStepperModule, MatExpansionModule,
    NgOptimizedImage,MatButtonModule,MatDialogModule,MatSnackBarModule,
  ],
  providers: [AssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
