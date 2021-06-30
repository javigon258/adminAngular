import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CookiesComponent } from "./cookies/cookies.component";
import { HeaderComponent } from "./header/header.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
    imports:[RouterModule,CommonModule],
    declarations: [    
        HeaderComponent,
        SidebarComponent,
        CookiesComponent,
        NopagefoundComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        CookiesComponent,
        NopagefoundComponent
    ]
})

export class SharedModule {}
