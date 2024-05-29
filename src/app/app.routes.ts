import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModifyComponent } from './modify/modify.component';
import { CreateComponent } from './create/create.component'; 

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'modify', component: ModifyComponent},
    {path: 'create', component: CreateComponent}
];
