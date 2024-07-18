import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisDashboardComponent } from './analysis-dashboard/analysis-dashboard.component';
 

const routes: Routes = [
    {
        path: '',children: [{path: 'anadashboard', component: AnalysisDashboardComponent}]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AnalysisRoutingModule { }
