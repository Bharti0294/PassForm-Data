import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
  export class UserdetailsComponent implements OnInit {

    @Input() parentForm: FormGroup | undefined
    
    constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
