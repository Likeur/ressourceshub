import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RessourceListComponent } from '../../components/ressource-list/ressource-list.component';

@Component({
  selector: 'app-homepage',
  imports: [RouterModule, NavbarComponent, RessourceListComponent],
  templateUrl: './homepage.component.html',
})
export default class HomepageComponent {

}
