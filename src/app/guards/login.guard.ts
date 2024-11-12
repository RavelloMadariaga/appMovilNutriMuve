import { inject } from "@angular/core";
import { user } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { DatabaseService } from '../services/database.service';
import { LoginService } from '../services/login.service';





export const loginGuard = () =>{

    let LoginService: LoginService;
    const idUser: string | null = null;
    const router = inject(Router);

    
    return true;
    
    // if (LoginService.recuperar()){
    //     return true;
    // }else {
    //     router.navigate(['/login'])
    //     return false;
        
    // }
}