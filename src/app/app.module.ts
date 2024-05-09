import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { FondoLoginComponent } from './components/fondo-login/fondo-login.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { BusquedaLogradaComponent } from './pages/busqueda-lograda/busqueda-lograda.component';
import { MainContentComponent } from './pages/ingreso-de-placas/main-content/main-content.component';

//Import para Ingrso de placas y Busqueda lograda
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './pages/ingreso-de-placas/search/search.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { FormComponent } from './pages/ingreso-de-placas/form/form.component';
//Imports para el ingreso de infraccion
import { Infraccion1Component } from './pages/infraccion1/infraccion1.component';
import { ColorPickerModalComponent } from './components/color-picker-modal/color-picker-modal.component';
//Imports para Interfaz InfraccionFotos
import { BotonesComponent } from './components/botones/botones.component';
import { TriangulosFondoLoginComponent } from './components/triangulos-fondo-login/triangulos-fondo-login.component';
import { Infraccion2FormularioComponent } from './components/infraccion2-formulario/infraccion2-formulario.component';
import { Infraccion5Component } from './pages/infraccion5/infraccion5.component';
import { FormularioInfraccion5Component } from './components/formulario-infraccion5/formulario-infraccion5.component';
import { BarraDeProgresoComponent } from './components/barra-de-progreso/barra-de-progreso.component';
import { InfraccionesAgregadasComponent } from './components/infracciones-agregadas/infracciones-agregadas.component';
import { BusquedaIncorrectaComponent } from './pages/busqueda-incorrecta/busqueda-incorrecta.component';

// pages

import { PerfilVeicularComponent } from './pages/perfil-veicular/perfil-veicular.component';
import { Infraccion9Component } from './pages/infraccion9/infraccion9.component';

//components
import { BotonesLateralesComponent } from './components/botones-laterales/botones-laterales.component';
import { Infraccion8Component } from './pages/infraccion8/infraccion8.component'; 
import { IconLineContainerComponent } from './components/icon-line-container/icon-line-container.component';


import { VentanaPopUpComponent } from './components/ventana-pop-up/ventana-pop-up.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ConsultaInicioComponent } from './pages/consulta-inicio/consulta-inicio.component';
import { ConsultaFiltroComponent } from './components/consulta-filtro/consulta-filtro.component';
import { ConsultaTablaInfraccionesComponent } from './components/consulta-tabla-infracciones/consulta-tabla-infracciones.component';
import { ConsultaLabelComponent } from './components/consulta-label/consulta-label.component';
import { NavBarInfraccion8Component } from './components/nav-bar-infraccion8/nav-bar-infraccion8.component';
import { PerfilVehicularRegistradoComponent } from './pages/perfil-vehicular-registrado/perfil-vehicular-registrado.component';
import { Infraccion6Component } from './pages/infraccion6/infraccion6.component';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FondoLoginComponent,
    FormularioLoginComponent,
    LoginComponent,
    PagenotfoundComponent,
    SearchComponent,
    NavBarComponent,
    MainContentComponent,
    CountdownTimerComponent,
    BusquedaLogradaComponent,
    FormComponent,
    Infraccion1Component,
    ColorPickerModalComponent,
    BotonesComponent,
    TriangulosFondoLoginComponent,
    Infraccion2FormularioComponent,
    Infraccion5Component,
    FormularioInfraccion5Component,
    BarraDeProgresoComponent,
    InfraccionesAgregadasComponent,
    BusquedaIncorrectaComponent,
    PerfilVeicularComponent,
    Infraccion9Component,
    SearchComponent,
    MainContentComponent,
    BusquedaLogradaComponent,
    FormComponent,
    BotonesLateralesComponent,
    Infraccion8Component,
    IconLineContainerComponent,
    VentanaPopUpComponent,
    HistorialComponent,
    SidenavComponent,
    ConsultaInicioComponent,
    ConsultaFiltroComponent,
    ConsultaTablaInfraccionesComponent,
    ConsultaLabelComponent,
    NavBarInfraccion8Component,
    Infraccion6Component,
    PerfilVehicularRegistradoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([]),
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
