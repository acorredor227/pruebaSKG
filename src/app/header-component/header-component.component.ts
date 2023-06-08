import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {
  habilitar_clase:boolean = false;
  habilitar_boton_amarillo:boolean = false;
  habilitar_boton_gris:boolean = true;

  botonAmarillo() {
    this.habilitar_clase = true;
    this.habilitar_boton_amarillo = true;
    this.habilitar_boton_gris = false;
  }

  botonGris() {
    this.habilitar_clase = false;
    this.habilitar_boton_amarillo = false;
    this.habilitar_boton_gris = true;
  }

}
