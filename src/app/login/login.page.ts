import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonContent, 
          IonHeader, 
          IonTitle, 
          IonToolbar, 
          IonBackButton, 
          IonButtons, 
          IonInput,
          IonCard,
          IonCardContent,
          IonCardHeader,
          IonCardTitle, 
          IonFooter, 
          IonButton, 
          IonText
          } from '@ionic/angular/standalone';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports:  [IonContent,
            IonHeader,
            IonTitle,
            IonToolbar, 
            CommonModule, 
            FormsModule, 
            IonBackButton, 
            IonButtons, 
            IonInput,
            IonCard,
            IonCardContent,
            IonCardHeader,
            IonCardTitle, 
            IonFooter, 
            IonButton, 
            IonText]
})
export class LoginPage implements OnInit {
  
  usuario={
    user:'',
    pass:''
  }

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }
  
  ingresar(){
    let navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    this.router.navigate(['/home'],navigationExtras);
  }
  

}
