import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogRef } from '@angular/cdk/dialog';
import { KeyWord } from '../models/KeyWord';
import { ServicesService } from '../services.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarBadFormatComponent } from '../snack-bar-bad-format/snack-bar-bad-format.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  keyWord:KeyWord;
 


  constructor(private snackBar:MatSnackBar,private dialogRef:DialogRef,private service:ServicesService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    
  }

  asignar(){
   
    
   
  }

   async uploadFile($event: any) {
    console.log("dataCliente",this.data)
    let selectedFile = $event.target.files[0];
    if (selectedFile != null) {
      if (selectedFile.name.includes('.mp3')) {
          this.service.getSpeech(selectedFile).subscribe(data2=>{
            this.keyWord=data2;
            console.log("data",data2)
            console.log("kiword",this.keyWord)
            this.service.assignSpeech(this.data,this.keyWord).subscribe();

          })
          
      } else {
        this.snackBar.openFromComponent(SnackBarBadFormatComponent,{duration:2000,panelClass:'alert-red'});
      }

      
    }
    
  }

}
