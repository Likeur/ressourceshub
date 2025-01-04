import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RessourceListComponent } from '../../components/ressource-list/ressource-list.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-homepage',
  imports: [RouterModule, NavbarComponent, RessourceListComponent, FooterComponent],
  templateUrl: './homepage.component.html',
})
export default class HomepageComponent {

}
