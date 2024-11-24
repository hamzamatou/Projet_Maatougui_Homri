import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  private loginService:LoginService = inject(LoginService);
  private router:Router= inject(Router);
  private fb:FormBuilder=inject(FormBuilder);
  loginObj!:{userName:string,password:string};
ngOnInit(): void {
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  this.loginService.getLogin().subscribe(
    data=>this.loginObj=data
  )
}
onLogin() {
  if (this.loginForm.valid) {
    const { username, password } = this.loginForm.value;
    const isValid = this.loginService.logIn(username, password);
    if (isValid) {
      this.router.navigate(['/layout']);
    } else {
      alert('Invalid username or password');
      this.loginForm.reset();
    }
  }
}
  isValidUserName() {
    return this.loginForm.get('username')?.value === this.loginObj.userName;
  }

  isValidPassword() {
    return this.loginForm.get('password')?.value === this.loginObj.password;
  }

  isValidForm() {
    return this.loginForm.get('username')?.errors?.['required'] && this.loginForm.get('password')?.errors?.['required'];
  }
}
