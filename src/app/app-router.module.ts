import { RouterModule, Routes } from '@angular/router';


//components
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';



//routes

const routes: Routes = [
    { path: "register", component: RegisterComponent },
    { path: "", component: RegisterComponent }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutreModule { }