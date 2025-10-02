import { Routes } from '@angular/router';
import { ListaProdutosComponent } from './paginas/lista-produtos/lista-produtos.component';
import { HomePageComponent } from './componentes/homePage/homepage.component';
import { LoginComponent } from './paginas/login/login.component';
import { LayoutComponent } from './componentes/layout/layout.component';
import { RegistrarComponent } from './paginas/registrar/registrar.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registrar', component: RegistrarComponent},


    { 
        path: '', 
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomePageComponent},
            {path: 'produtos', component: ListaProdutosComponent}
        ]
    }
]