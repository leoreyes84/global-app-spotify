import { Routes } from '@angular/router';
import { LanzamientosComponent } from './components/lanzamientos/lanzamientos.component';

export const ROUTES: Routes = [
    { path: 'lanzamientos', component: LanzamientosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'lanzamientos' },
    { path: '**', pathMatch: 'full', redirectTo: 'lanzamientos' }
];