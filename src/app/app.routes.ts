import { Routes } from '@angular/router';
import { ListaProdutosComponent } from './paginas/lista-produtos/lista-produtos.component';
import { HomePageComponent } from './componentes/homePage/homepage.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent, data: {animation: 'Home'}},
    {path: 'produtos', component: ListaProdutosComponent, data: {animation: 'ListaProdutos'}}
];
