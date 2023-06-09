import { Component } from '@angular/core';
import { AlertaService } from './alerta.service';
import { User } from './model/user';

const HEROES = [
  { id:1, name: 'Superman'},
  { id:2, name: 'Batman'},
  { id:5, name: 'BatGirl'},
  { id:3, name: 'Robin'},
  { id:4, name: 'Flash'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDemo'; 
  desciere: string=" O scurta descirere a aplicatiei";
  culoare:string= 'blue';
  nr :number= 0;
  imgSrc:string = 'https://cdn.britannica.com/61/177761-050-F38C22B1/Christopher-Reeve-Superman-Richard-Donner.jpg';
  valoare:string= 'Valoare input';

  afiseaza:boolean= true;

  eroi= HEROES;

  persoana:User ={
    id:1,
    nume:'Popescu',
    prenume:'Ion'
  }
 constructor(private alertaService:AlertaService){

 }
  showImg(){
    //alert(111111);
    if(this.imgSrc !==''){
      this.imgSrc=''
    }
    else{
      this.imgSrc='https://cdn.britannica.com/61/177761-050-F38C22B1/Christopher-Reeve-Superman-Richard-Donner.jpg';
    }
   }
   showImg2(){
    this.afiseaza = !this.afiseaza;

   }

   inputCount(){
    if(this.valoare.length >20){
      this.alertaService.afiseazaMesaj('Nr prea mare de caractere')
      this.valoare='';
    }
  
   }
}
