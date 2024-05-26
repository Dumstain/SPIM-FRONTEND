import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // Validación de correo electrónico
      password: ['', [Validators.required, Validators.minLength(6)]] // Contraseña de mínimo 6 caracteres
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: (response) => {
          this.authService.handleAuthentication(response.token, response.userId, response.tipo_usuario);
        },
        error: (err) => {
          console.error('Error during login:', err);
          this.loginError = 'Fallo en la autenticación. Verifica tus credenciales.'; // Manejo de errores mejorado
        }
      });
    } else {
      this.loginError = 'Formulario no válido. Por favor, revisa los campos.';
    }
  }
}
