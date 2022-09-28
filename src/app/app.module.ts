import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { HeaderComponent } from './component/header/header.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { Usuario } from './models/usuario';
import { IdLibroPipe } from './pipes/id-libro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    FormularioRegistroComponent,
    RegistroComponent,
    HeaderComponent,
    FooterComponent,
    LibrosComponent,
    IdLibroPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }