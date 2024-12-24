import { Component, ViewChild, ElementRef } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ContactoComponent } from "../contacto/contacto.component";

@Component({
  selector: "app-inicio",
  standalone: true,
  imports: [RouterLink,ContactoComponent],
  templateUrl: "./inicio.component.html",
  styleUrl: "./inicio.component.scss",
})
export class InicioComponent {
 
scrollToSection(seccion:string){

}
 
}

