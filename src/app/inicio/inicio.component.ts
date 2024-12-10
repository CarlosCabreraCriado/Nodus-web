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
  @ViewChild("contacto") seccionContacto!: ElementRef
  scrollToMargin(seccion: string) {
    var elementPosition = 0;
    const offset = 80;
    console.log(this.seccionContacto)
    switch (seccion) {
     
      case "contacto":
      /*   elementPosition =
          this.seccionContacto.nativeElement.getBoundingClientRect().top +
          window.scrollY;*/
          this.seccionContacto.nativeElement.scrollIntoView({
            behavior:"smooth"
          })
          
        break;
    }
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
}

