import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DatabaseService } from '../services/database.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RutinaPage {
  rutinas: any[] = []; 
  idUser: string | null = null;

  constructor(
    private dbService: DatabaseService,
    private LoginService: LoginService
  ) { }
  async ionViewWillEnter() {
    this.idUser = this.LoginService.currentUserId;
    await this.loadUserData();
  }
  async loadUserData() {
    try {
      this.idUser = this.LoginService.currentUserId;
  
      if (this.idUser == null) {
        console.error('Usuario no autenticado');
        return;
      }
  
      const todasRutinas = await this.dbService.getRutinas();
      this.rutinas = todasRutinas.filter(rutina => rutina['id_user'] === this.idUser);
  
      if (this.rutinas.length === 0) {
        console.error('No se encontraron rutinas para el usuario');
      }
    } catch (error) {
      console.error('Error al cargar las rutinas:', error);
    }
  }  
}



