import { NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Mask module
import { NgxMaskModule } from 'ngx-mask'

// Material imports
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

// Components
import { AppComponent } from './app.component';
import { NavegationComponent } from './shared/components/navegation/navegation.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { VerifyComponent } from './modules/pages/verify/verify.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { StepperComponent } from './shared/components/stepper/stepper.component';
import { UserinfoComponent } from './modules/pages/userinfo/userinfo.component';
import { PagenotfoundComponent } from './modules/pages/pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    HeaderComponent,
    VerifyComponent,
    FooterComponent,
    StepperComponent,
    UserinfoComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatCardModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
