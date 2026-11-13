import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,Validators} from '@angular/forms';
import {form, FormField,required, minLength, maxLength,pattern,min,max} from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-veterinaria-component',
  styleUrl: './form-veterinaria-component.css',
  templateUrl: './form-veterinaria-component.html',
})
export class FormVeterinariaComponent {


  especies = ['Felino','Ave','Insecto','Anfibio']

  veterinariaForm = new FormGroup({

    nombre:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(30),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    apellidos: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(50),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    telefono: new FormControl('',[Validators.required,Validators.pattern( /^(\+34 ?)?[6-9]\d{8}$/)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    mascota: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    especies: new FormControl('',Validators.required),
    sexo: new FormControl('',Validators.required),
    raza: new FormControl('',Validators.maxLength(40)),
    edad: new FormControl('',[Validators.required,Validators.min(0),Validators.max(30)]),
    peso: new FormControl ('',[Validators.required,Validators.min(0.1),Validators.max(90)]),
    microchip: new FormControl('',[Validators.required,Validators.pattern(/^\d{15}$/)]),
    password: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(30),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)]),
    motivo: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(300)]),
    privacidad: new FormControl('',Validators.requiredTrue),
    recordatorios: new FormControl(''),

  })

  getNombre(){

    return this.FormField.get(nombre);
    
  }
  getApellidos(){

    return this.apellidos;
    
  }
  getTelefono(){

    return this.telefono;
    
  }
  getEmail(){

    return this.email;
    
  }
  getMascota(){

    return this.mascota;
    
  }
  getEspecie(){

    return this.especies;
    
  }
  getSexo(){

    return this.sexo;
    
  }

  getEdad(){

    return this.edad;
    
  }

  getPeso(){

    return this.peso;
    
  }
  getMicrochip(){

    return this.microchip;
    
  }
  getPassword(){

    return this.password;
    
  }

  getMotivo(){

    return this.motivo;
    
  }

  getPrivacidad(){

    return this.privacidad;
    
  }


   guardar(){
     console.log(nombre),
     console.log(apellidos),
     console.log(telefono),
     console.log(email),
     console.log(mascota),
     console.log(especies),
     console.log(edad),
     console.log(peso),
     console.log(microchip),
     console.log(password),
     console.log(motivo),
     console.log(privacidad),
     console.log(recordatorios),
   }

}
