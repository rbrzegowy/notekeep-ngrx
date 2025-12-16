import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user-login',
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  user = {
    name: '',
    email: ''
  }
  onLogin() {
    console.log('User logged in:', this.user)
  }
}
