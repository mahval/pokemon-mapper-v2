import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    // { path: 'table', component: SecondComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
