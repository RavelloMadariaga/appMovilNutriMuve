import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';
import {Usuario} from '../services/modulos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroPage {
  user: Usuario = new Usuario();
  repeatPassword: string = '';
  constructor(private dbService: DatabaseService) {}

  async onSubmit() {
    if (this.user.contrasena !== this.repeatPassword) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }
    try {
      await this.dbService.insertUsuario(this.user);
      console.log('Usuario registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }
}
