import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Asegúrate de importar ReactiveFormsModule
import { CommonModule } from '@angular/common';  // Importa CommonModule para las directivas comunes

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css'],
  standalone: true,  // Marca el componente como autónomo
  imports: [ReactiveFormsModule, CommonModule]  // Importa ReactiveFormsModule y CommonModule aquí
})
export class ReactiveFormValidationComponent {
  documentForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    // Inicializa el formulario con los controles necesarios
    this.documentForm = this.formBuilder.group({
      documentType: ['', Validators.required],
      documentNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      apellido: ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.documentForm.valid) {
      this.formSubmitted = true;
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

  onReset() {
    this.formSubmitted = false;
    this.documentForm.reset();
  }
}
