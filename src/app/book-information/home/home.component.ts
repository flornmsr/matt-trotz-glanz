import { Component, OnInit } from '@angular/core';
import { WindowsSizeService } from 'src/app/menu/windows-size.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public windowsSizeService: WindowsSizeService, private snackbar: MatSnackBar, private router: Router) {

  }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snackbar.open('Buchvernissage: 2. Oktober 2020 18.30 Uhr, Stiftung TRANSfair Thun', 'Mehr', {
      duration: 10000,
    }).onAction()
    .subscribe(() => this.router.navigate(['/buch']));
  }

  




}
