import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";
import { Graficas1Component } from "./pages/graficas1/graficas1.component";
import { PagesComponent } from "./pages/pages.component";
import { PrincipalComponent } from "./pages/principal/principal.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";


const appRoutes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children: [
            {path: 'inicio', component: PrincipalComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'grafica1', component: Graficas1Component},
            {path: '', redirectTo: '/inicio', pathMatch: 'full'},
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NopagefoundComponent},
];

export const APP_routes = RouterModule.forRoot(appRoutes, {useHash: true});