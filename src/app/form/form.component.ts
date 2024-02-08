// form.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventsService } from '../events.service';
import { Subscription } from 'rxjs';
import { InsertedSuccess, UniqueConstraintError, events } from '../events';
import { NgForm } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  public showPreview: boolean = false;
  public pdfPreviewUrl: string = '';
  public formData: any = {};
  private subscription: Subscription = new Subscription();

  constructor(private service: EventsService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  Insert(form: NgForm) {
    // Your Insert logic here
  }

  previewFormData(form: NgForm) {
    const userFormData = form.value; // Get form values

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Construct the PDF content
    let content = `
      Organized By: ${userFormData.orgBy}
      Program Type: ${userFormData.prgType}
      Program Coordinator: ${userFormData.prgCoordinator}
      Program Theme: ${userFormData.prgTheme}
      Start Date: ${userFormData.startDate}
      End Date: ${userFormData.endDate}
      Duration (in hrs): ${userFormData.prgDuration}
      Number of students participated: ${userFormData.num_std}
      Number of Faculty participated: ${userFormData.num_faculty}
      Number of External persons participated: ${userFormData.num_externals}
      Number of Resource persons participated: ${userFormData.num_rsrc_person}
      Expenditure Amount (in words): ${userFormData.amount}
      Mode of Session: ${userFormData.mode_session}
      Remarks: ${userFormData.remarks}
      Objective: ${userFormData.objective}
      Benefits obtained in terms of Learning/Knowledge/Skills: ${userFormData.benefits}
    `;

    // Set font and add content to the PDF
    doc.setFont('helvetica');
    doc.setFontSize(12);
    doc.text(content, 10, 10);

    // Save the PDF
    doc.save('preview.pdf');

    // Set the PDF preview URL and show the preview section
    this.pdfPreviewUrl = doc.output('datauristring');
    this.showPreview = true;
  }
}
