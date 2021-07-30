import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username1 ={};
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
  }
  loginForm = this.fb.group({
    username:[""],
    password:[""]
  })

  // loginForm = new FormGroup({
  //   username: new FormControl("",[Validators.required]),
  //   password: new FormControl("")
  // })

  handleSubmit(){
    console.log("form submit!",this.loginForm.value)
        this.http.post("http://localhost:4200/dahuangmao",this.loginForm.value).subscribe(res =>{
          console.log(res)
    })
  }



}
