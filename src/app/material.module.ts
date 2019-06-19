import { NgModule } from "@angular/core";
import {
    MatButtonModule, MatToolbarModule,
    MatIconModule,
    MatCardModule, MatCheckboxModule
} from "@angular/material";
@NgModule({
    imports: [
        MatButtonModule, MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule, MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
    ]
})

export class MaterialModule {

}