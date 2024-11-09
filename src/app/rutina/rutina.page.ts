import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RutinaPage implements OnInit {
  rutinas: any[] = []; 
  idUser: string = '108X40a4bQihIezXqhvk';

  constructor(private dbService: DatabaseService) { }

  async ngOnInit() {
    try {
      const todasRutinas = await this.dbService.getRutinas();
      this.rutinas = todasRutinas.filter(rutina => rutina['id_user'] === this.idUser);
      /*
      for (const rutina of this.rutinas) {
        rutina.ejercicios = await this.dbService.getRutinaEjercicios(rutina.id);
      }

      if (this.rutinas.length === 0) {
        console.error('No se encontraron rutinas para el usuario');
      }
      */
    } catch (error) {
      console.error('Error al cargar las rutinas:', error);
    }
  }
}



