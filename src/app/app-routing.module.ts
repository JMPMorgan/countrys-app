import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { PerCountryComponent } from './country/pages/per-country/per-country.component';
import { PerRegionComponent } from './country/pages/per-region/per-region.component';
import { PerCapitalComponent } from './country/pages/per-capital/per-capital.component';
import { CountryComponent } from './country/pages/country/country.component';

const routes:Routes=[
    {
        path:'',
        component:PerCountryComponent,
        pathMatch:'full'
    },
    {
        path:'region',
        component:PerRegionComponent,
    },
    {
        path:'capital',
        component:PerCapitalComponent
    },
    {
        path:'country/:id',
        component:CountryComponent
    },
    {
        path:"**",
        redirectTo:''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}