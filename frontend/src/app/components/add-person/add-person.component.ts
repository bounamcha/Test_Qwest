import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  first_name: string;
  last_name: string;
  address: string;
  isActive: string;
  owner:string;

  constructor(
    private flashMessage: FlashMessagesService,
    private userService: UserService,
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
  }


 onAddPerson(){

    if (!this.first_name || !this.last_name || !this.address) {
      this.flashMessage.show('complete the fields', { cssClass: 'alert-danger'});
      return false ;
    }

    {
      const  person = {
        first_name: this.first_name,
        last_name: this.last_name,
        address: this.address,
        isActive: this.isActive
       // owner: this.owner
      }

      console.log(person);

      this.personService.savePerson(person).subscribe(
        (resp: any) => {
         if (!resp.success) {
           this.flashMessage.show("all fields are required", { cssClass: 'alert-danger'});
           return false;
         }
         this.flashMessage.show('person saved', { cssClass: 'alert-success' }) ;
         this.router.navigate(['/main']);
         console.log(resp);

        });
      }

}
}
 