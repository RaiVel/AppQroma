import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard} from './guards/auth.guard'
import { NologinGuard} from './guards/nologin.guard'

const routes: Routes = [
  //El aplicativo cuenta con 2 paginas principales, una de login y la segunda contiene los tabs
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard]},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [NologinGuard]},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
