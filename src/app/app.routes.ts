import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ListaProdutosComponent } from './paginas/lista-produtos/lista-produtos.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'produtos', component: ListaProdutosComponent}
];
