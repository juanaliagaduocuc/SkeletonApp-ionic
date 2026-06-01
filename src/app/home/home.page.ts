import { Component, ElementRef, ViewChildren } from '@angular/core';
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
          IonFooter, 
          IonItem, 
          IonAlert, 
          IonInput} from '@ionic/angular/standalone';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import type { Animation } from '@ionic/angular/standalone';
import type { QueryList } from '@angular/core';
import { AnimationController } from '@ionic/angular/standalone';
import { DatePipe } from '@angular/common';

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
              FormsModule, 
              IonItem, 
              IonAlert, 
              IonInput,
              DatePipe],
})
export class HomePage {

  @ViewChildren ( IonInput, { read: ElementRef } ) input!: QueryList<ElementRef<HTMLIonInputElement>>;

  private animation!: Animation;

  dataHidden = true;
  dataShown = false;

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
    private router: Router,
    private animationCtrl: AnimationController) {
      this.activeroute.queryParams.subscribe ( params => {
        if (this.router.currentNavigation()?.extras?.state){
          this.data = this.router.currentNavigation()?.extras?.state?.['usuario'];
          this.dataHidden = false;
          this.dataShown = true;
        }
      });
  }
  ngAfterViewInit(){

    const inputNombre = this.animationCtrl
      .create()
      .addElement(this.input.get(0)!.nativeElement)
      .keyframes([
        { offset: 0, transform: 'translateX(10px)'},
        { offset: .2, transform: 'translateX(-10px)'},
        { offset: .4, transform: 'translateX(10px)'},
        { offset: .6, transform: 'translateX(-10px)'},
        { offset: .8, transform: 'translateX(10px)'},
        { offset: 1, transform: 'translateX(0px)'}
      ])
    const inputApellido = this.animationCtrl
      .create()
      .addElement(this.input.get(1)!.nativeElement)
      .keyframes([
        { offset: 0, transform: 'translateX(10px)'},
        { offset: .2, transform: 'translateX(-10px)'},
        { offset: .4, transform: 'translateX(10px)'},
        { offset: .6, transform: 'translateX(-10px)'},
        { offset: .8, transform: 'translateX(10px)'},
        { offset: 1, transform: 'translateX(0px)'}
      ])
    this.animation = this.animationCtrl
    .create()
    .duration(1000)
    .iterations(1)
    .addAnimation([inputNombre,inputApellido].filter(Boolean) as Animation[]);
  }


  alertOpen = false;
  alertButtons = ['Cerrar'];

  abrirAlerta(abierto: boolean){
    this.alertOpen = abierto;
  };

  play(){
    this.animation.play();
    this.usuario.nombre = "";
    this.usuario.apellido = "";
    this.usuario.educacion = "";
    this.usuario.fec_nac = "";
  };

  cerrar(){
    this.data = "";
    this.dataHidden = true;
    this.dataShown = false;
  };

}
