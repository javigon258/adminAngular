import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";

import { Graficas1Component } from "./graficas1/graficas1.component";
import { PrincipalComponent } from "./principal/principal.component";
import { ProgressComponent } from "./progress/progress.component";

const pagesRoutes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children: [
            {path: 'inicio', component: PrincipalComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'grafica1', component: Graficas1Component},
            {path: '', redirectTo: '/inicio', pathMatch: 'full'},
        ]
    }
];

export const Pages_routes = RouterModule.forRoot(pagesRoutes, {useHash: true});