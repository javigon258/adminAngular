import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";

import { Graficas1Component } from "./graficas1/graficas1.component";
import { PrincipalComponent } from "./principal/principal.component";
import { ProgressComponent } from "./progress/progress.component";
import { AjustesCuentaComponent } from "./ajustes-cuenta/ajustes-cuenta.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'inicio', component: PrincipalComponent, data: { titulo: 'Dashboard' }},
            {path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }},
            {path: 'grafica1', component: Graficas1Component, data: { titulo: 'Gráficas' }},
            {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
            {path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},
            {path: 'ajustes-cuenta', component: AjustesCuentaComponent, data: { titulo: 'Ajustes del Tema' }},
            {path: '', redirectTo: '/inicio', pathMatch: 'full'},
        ]
    }
];

export const Pages_routes = RouterModule.forRoot(pagesRoutes, {useHash: true});
