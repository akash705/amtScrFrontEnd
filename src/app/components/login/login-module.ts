import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes =[
    {path:'',component:LoginComponent}

]
@NgModule({
    declarations:[
        LoginComponent        
    ],
    imports:[
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        RouterModule.forChild(appRoutes)
    ]
})
export class loginModule{ }