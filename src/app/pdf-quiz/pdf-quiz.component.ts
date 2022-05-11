// import { jsPDF } from './../../../node_modules/jspdf/types/index.d';
import { Component, OnInit } from '@angular/core';
import jspdf  from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf-quiz',
  templateUrl: './pdf-quiz.component.html',
  styleUrls: ['./pdf-quiz.component.css']
})
export class PdfQuizComponent {
text:string=";"
  title = 'html-to-pdf';
 
  generatePDF() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('newPDF.pdf');
    });
  }

  download(){
    var doc = new jspdf()
    doc.text(this.text, 10, 10)
    doc.save("quiz.pdf")
  }

}
