import { User } from './../../../shared/classes/user.model';
import { UserService } from './../../../shared/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  @Input() main = true;
  @Input() data = '';
  FormCPF: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router
  ) {
    this.FormCPF = this.formBuilder.group({
      Cpf: [this.data, Validators.compose([Validators.required, Validators.minLength(11)])]
    })
  }

  ngOnInit(): void {
    if (!this.main) {
      this.FormCPF.disable()
    } else {
      this.userService.verified = false
    }
  }

  onSubmit(): void {
    if (this.FormCPF.valid) {
      const forms: User = this.FormCPF.value
      let User = this.userService.searchCPF(forms.Cpf)
      if (User != -1) {
        this.userService.verified = true
        this.router.navigate(['/perfil', User.Cpf])
      } else {
        this.snackBar.open('CPF não cadastrado', '', {
          duration: 1500,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['msg-erro']
        });
      }
    }
    else {
      this.snackBar.open('CPF inválido', '', {
        duration: 1500,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['msg-erro']
      });
    }
  }
}

