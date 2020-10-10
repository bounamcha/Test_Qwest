import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { UserService} from '../../services/user.service';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  persons: any ;
  searchText;
  
  constructor(
    private flashMessage: FlashMessagesService,
    private userService: UserService,
    private router: Router,
    private personService: PersonService
  ) {}


  ngOnInit(): void {

  const currentuser = this.userService.getCurrentUser();
  const query = {owner: currentuser.id }
  this.personService.getPerson(query).subscribe(
   ( res: any) => {
    this.persons = res.person;
    console.log(this.persons)
    }
  )
  }

    deletePerson(id) {
      this.personService.deletePerson(id).subscribe(
        (resp: any) => {
          console.log(id);
          if (!resp.success) {
            this.flashMessage.show('error', { cssClass : 'alert-danger '});
          }else{

            this.flashMessage.show('Person Deleted', { cssClass : 'alert-success '});
          }

          this.router.navigate(['/main']);
        }
      );
    }
  }

