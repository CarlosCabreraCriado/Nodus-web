import { Routes } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  {
    path: "inicio",
    pathMatch: "full",
    canActivate: [],
    component: InicioComponent,
  },
  {
    path: "contacto",
    pathMatch: "full",
    canActivate: [],
    component: ContactoComponent,
  },
  {
    path: "login",
    pathMatch: "full",
    canActivate: [],
    component: LoginComponent,
  },
];
