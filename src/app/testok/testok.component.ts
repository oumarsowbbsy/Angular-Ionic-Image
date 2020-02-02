import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TestokService} from '../testok.service';
@Component({
  selector: 'app-testok',
  templateUrl: './testok.component.html',
  styleUrls: ['./testok.component.css']
})
export class TestokComponent implements OnInit {

  title = 'Angular 7 Project!';
  url = "http://127.0.0.1:8000/uploads/images/intervenant/"
  public persondata = [];
  public persondata1: any;
  public lien: string = "/uploads/images/intervenant/"
  constructor(private myservice: TestokService) {}
  ngOnInit() {
    this.myservice.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k => data[k]);
      this.persondata1 = this.persondata[3];
      console.log(this.persondata1)
    });
  }


}
