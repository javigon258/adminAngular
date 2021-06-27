import { NgModule } from "@angular/core";

import { CookiesComponent } from "./cookies/cookies.component";
import { HeaderComponent } from "./header/header.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
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
