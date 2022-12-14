import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizesComponent } from './quizes/quizes.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { ShowDatePipe } from './show-date.pipe';
import { SearchPipe } from './search.pipe';
import { SolveQuizComponent } from './solve-quiz/solve-quiz.component';

const routes: Routes = [
  {path:'quizes',component:QuizesComponent},
  {path:'add',component:CreateComponent},
  {path:'quiz/:index',component:QuizComponent},
  {path:'solve', component:SolveQuizComponent},
  {path:'', redirectTo:'/quizes',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizesComponent,
    DeleteComponent,
    EditComponent,
    CreateComponent,
    ShowDatePipe,
    SearchPipe,
    SolveQuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
