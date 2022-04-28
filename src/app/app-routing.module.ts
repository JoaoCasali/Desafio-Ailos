import { PagenotfoundComponent } from './modules/pages/pagenotfound/pagenotfound.component';
import { UserinfoComponent } from './modules/pages/userinfo/userinfo.component';
import { VerifyComponent } from './modules/pages/verify/verify.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: VerifyComponent },
  { path: 'perfil/:Cpf', component: UserinfoComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
