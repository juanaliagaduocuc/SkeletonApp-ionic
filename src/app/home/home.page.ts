import { Component } from '@angular/core';
import {  IonHeader, 
          IonToolbar, 
          IonTitle, 
          IonContent, 
          IonButton,
          IonCard,
          IonCardContent,
          IonCardHeader,
          IonCardTitle, 
          IonCardSubtitle, 
          IonFooter} from '@ionic/angular/standalone';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

interface Nvl{
  nivel: string,
  desc: string
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [provideNativeDateAdapter()],
  imports: [  IonHeader, 
              IonToolbar, 
              IonTitle, 
              IonContent, 
              IonButton,
              RouterLink,
              IonCard,
              IonCardContent,
              IonCardHeader,
              IonCardTitle, 
              IonCardSubtitle, 
              IonFooter, 
              MatFormFieldModule, 
              MatInputModule, 
              MatSelectModule, 
              MatDatepickerModule, 
              MatButtonModule, 
              FormsModule],
})
export class HomePage {
  usuario={
    nombre:'',
    apellido:'',
    educacion:'',
    fec_nac:''
  }
  data: any;
  nvls: Nvl[] = [
    {nivel: '0', desc: 'Basica Incompleta'},
    {nivel: '1', desc: 'Basica Completa'},
    {nivel: '2', desc: 'Media Incompleta'},
    {nivel: '3', desc: 'Media Completa'},
    {nivel: '4', desc: 'Superior Incompleta'},
    {nivel: '5', desc: 'Superior Completa'},
    {nivel: '6', desc: 'Tecnico Incompleta'},
    {nivel: '7', desc: 'Tecnico Completa'},
  ];
  constructor(  
    private activeroute: ActivatedRoute,
    private router: Router) {
      this.activeroute.queryParams.subscribe ( params => {
        if (this.router.currentNavigation()?.extras?.state){
          this.data = this.router.currentNavigation()?.extras?.state?.['usuario'];
        }
      });
  }
  
  cerrar(){
    this.data = "";
  }
  limpiar(){
    this.usuario.nombre = '';
    this.usuario.apellido = '';
    this.usuario.educacion = '';
    this.usuario.fec_nac = '';
  }
  mostrar(){
    
  }
}
