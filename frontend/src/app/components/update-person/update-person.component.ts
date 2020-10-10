import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {UserService} from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {


  first_name: string;
  last_name: string;
  address: string;
  isActive: string;
  id : string ;

  persons: any ;

  constructor(
    private flashMessage: FlashMessagesService,
    private userService: UserService,
    private router: Router,
    private personService: PersonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onModifyPerson()
  {
      const  person = {
        id: this.id,
        first_name: this.first_name,
        last_name: this.last_name,
        address: this.address,
        isActive: this.isActive
       }

      console.log(person);
    // updatePerson(id){
      this.personService.updatePerson(person.id).subscribe(
          (resp: any) => {

          if (!resp.success) {
              this.flashMessage.show('error', { cssClass : 'alert-danger '});
            }else{

            this.flashMessage.show('person update', { cssClass : 'alert-success '});
            }

          this.router.navigate(['/main']);
          }
        );
      }


}
