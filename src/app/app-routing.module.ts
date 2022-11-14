import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAComponent } from 'src/components/componente-a/componente-a.component';
import { ComponenteBComponent } from 'src/components/componente-b/componente-b/componente-b.component';


const routes: Routes = [
  {
    path: 'home', component: ComponenteAComponent
  },
  {
    path: 'pagina2', component: ComponenteBComponent
  }
  //{
  //  path: '', component: ComponenteCComponent
  //},
  //{
  //  path: '', component: ComponenteDComponent
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
