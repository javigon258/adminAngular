import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages/pages.component";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";


const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NopagefoundComponent},
];

export const APP_routes = RouterModule.forRoot(appRoutes, {useHash: true});