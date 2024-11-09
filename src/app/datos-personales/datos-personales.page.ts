import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Usuario } from '../services/modulos.service';
import { DatabaseService } from '../services/database.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, FormsModule,CommonModule]
})
export class DatosPersonalesPage {
  user: Usuario = new Usuario();
  editMode: boolean = false;
  userId: string = 'jnXzLdpM5gRVZWOX2Lqs';

  constructor(private dbService: DatabaseService) {}

  async ionViewWillEnter() {
    await this.loadUserData();
  }
  async loadUserData() {
    try {
      const usuarios = await this.dbService.getUsuarios();
      const userDoc = usuarios.find(usuario => usuario.id === this.userId);

      if (userDoc) {
        this.user = this.mapToUsuario(userDoc);
      }
    } catch (error) {
      console.error('Error al cargar datos del usuario:', error);
    }
  }
  private mapToUsuario(data: any): Usuario {
    return {
      id_user: data.id,  
      rut: data.rut || "",  
      nombre_user: data.nombre_user || "",
      contrasena: data.contrasena || "",
      email: data.email || "",
      nombre: data.nombre || "",
      apellido_pat: data.apellido_pat || "",
      apellido_mat: data.apellido_mat || "",
      peso: data.peso || 0,  
      estatura: data.estatura || 0,
      mesotipo: data.mesotipo || "",
      edad: data.edad || 0,
      id_rol: data.id_rol || 0
    };
  }
  toggleEditMode() {
    this.editMode = !this.editMode;
  }
  async onSubmit() {
    if (!this.editMode) return; 

    try {
      await this.dbService.updateUsuario({ ...this.user, id: this.userId });
      console.log('Usuario modificado exitosamente');
      this.editMode = false;
    } catch (error) {
      console.error('Error al modificar usuario:', error);
    }
  }
}



