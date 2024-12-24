import { Component, ViewChild, ElementRef } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "nodus-web";

  @ViewChild("contacto") seccionContacto!: ElementRef
  @ViewChild("tecnologia") seccionTecnologia!: ElementRef
  @ViewChild("programas") seccionPrograma!: ElementRef

  scrollToMargin(seccion: string) {
    var elementPosition = 0;
    const offset = 80;
    console.log(this.seccionContacto)
    switch (seccion) {
     
      case "contacto":
        elementPosition =
          this.seccionContacto.nativeElement.getBoundingClientRect().top +
          window.scrollY;
        break;
        case "tecnologia":
        elementPosition =
          this.seccionTecnologia.nativeElement.getBoundingClientRect().top +
          window.scrollY;
        break;
        case "programas":
        elementPosition =
          this.seccionPrograma.nativeElement.getBoundingClientRect().top +
          window.scrollY;
        break;
    }
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
}
