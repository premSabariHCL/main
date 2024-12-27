import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userListObj: any;
  photoListObj: any;
  constructor(private services: CommonService) { }

  ngOnInit(): void {
    this.services.getUserData().subscribe((res: any) => {
      this.userListObj = (res);
      // console.log(this.userListObj);
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });

    this.services.getPhotoData().subscribe((res: any) => {
      this.photoListObj = (res);
      // console.log(this.photoListObj);
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

}
