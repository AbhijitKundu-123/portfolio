import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  constructor (private dialog: MatDialog) {

  }
  // openRegisterDialog() {
  //   this.dialog.open(DialogComponent,{
  //     width: "80%",
  //     height: "100%"
  //   })
  // }
  url = "./assets/img/circle-cropped(1).png";
  pdf = "./assets/pdf/Update_resume.pdf";
  // dawnloadResume() {
  //   console.log("hello")
  //   // var doc = new jsPDF()
  //   // doc.path("./assets/pdf/Update_resume.pdf",10,10)
  //   html2canvas(document.getElementById("dawnloadByPdf")!).then(canvas => {
  //     // Few necessary setting options

  //     const contentDataURL = canvas.toDataURL('image/png')
  //     let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  //     var width = pdf.internal.pageSize.getWidth();
  //     var height = canvas.height * width / canvas.width;
  //     pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
  //     pdf.save('output.pdf'); // Generated PDF
  //     });
  // }
}
