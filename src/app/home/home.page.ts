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
          IonFooter} from '@ionic/angular/standalone';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
              IonFooter],
})
export class HomePage {
  data: any;
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

}
