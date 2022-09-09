import { lastValueFrom } from 'rxjs';
import { Registration } from './models';
import { Component } from '@angular/core';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day34-client';
  constructor(private svc: RegistrationService) {}

  register(reg: Registration) {
    console.info('Registering >>> ', reg);
    this.svc.newRegistration(reg).then(result => {
      console.info('>>>> result: ', result)
      
      // alert(`Your registration ID is ${id}`);
    }).catch(error => {
      console.error('>>>> error: ', error)
    })
  }
}
