import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service: AuthenticationService) { }

  // ngOnInit(): void {
  //   this.service.get().subscribe((data)=>{
  //     console.log('data - ', data);
  //   })
  // }


  registeryForm = new FormGroup({
    Username: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  })

  onSubmit() {

    this.service.auth(this.registeryForm.value).subscribe((data: any) => {
      localStorage.setItem('user_token', data.Token);
      localStorage.setItem('user_refreshToken', data.RefreshToken);
    });

  }
}
