import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { Pages_routes } from "./pages.routes";

import { FormsModule } from "@angular/forms";

//ng2-charts
import { ChartsModule } from 'ng2-charts';


import { PagesComponent } from "./pages.component";

import { Graficas1Component } from "./graficas1/graficas1.component";
import { PrincipalComponent } from "./principal/principal.component";
import { ProgressComponent } from "./progress/progress.component";

//temp
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficoDonaComponent } from "../components/grafico-dona/grafico-dona.component";


@NgModule({
    declarations: [    
        PrincipalComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        PrincipalComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        Pages_routes,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}
