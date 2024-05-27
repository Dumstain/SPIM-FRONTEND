import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Infraccion1Component } from './pages/infraccion1/infraccion1.component';
import { Infraccion5Component } from './pages/infraccion5/infraccion5.component';
import { Infraccion8Component } from './pages/infraccion8/infraccion8.component';
import { Infraccion9Component } from './pages/infraccion9/infraccion9.component';
import { Infraccion6Component } from './pages/infraccion6/infraccion6.component';
import { PerfilVeicularComponent } from './pages/perfil-veicular/perfil-veicular.component';
import { PerfilVehicularRegistradoComponent } from './pages/perfil-vehicular-registrado/perfil-vehicular-registrado.component';
import { LoginComponent } from './pages/login/login.component';
import { BusquedaLogradaComponent } from './pages/busqueda-lograda/busqueda-lograda.component';
import { BusquedaIncorrectaComponent } from './pages/busqueda-incorrecta/busqueda-incorrecta.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { ConsultaInicioComponent } from './pages/consulta-inicio/consulta-inicio.component';
import { MainContentComponent } from './pages/ingreso-de-placas/main-content/main-content.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'busqueda-lograda', component: BusquedaLogradaComponent },
  { path: 'busqueda-incorrecta', component: BusquedaIncorrectaComponent },
  { path: 'perfil-vehicular', component: PerfilVeicularComponent },
  { path: 'ingreso-de-placas', component: MainContentComponent },
  { path: 'historial', component: HistorialComponent  },
  { path: 'infraccion-1', component: Infraccion1Component },
  { path: 'infraccion-2', component: Infraccion5Component },
  { path: 'infraccion-3', component: Infraccion6Component },
  { path: 'infraccion-4', component: Infraccion9Component },
  { path: 'perfil-vehicular-registrado', component: PerfilVehicularRegistradoComponent },
  { path: 'resumen-infraccion', component: Infraccion9Component },
  { path: 'Consulta-inicio', component: ConsultaInicioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
