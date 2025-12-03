import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  // EmailJS credentials - Replace with your own from https://www.emailjs.com/
  private readonly SERVICE_ID = 'service_5lh6zro';
  private readonly TEMPLATE_ID = 'template_bwfovea';
  private readonly PUBLIC_KEY = 'DBhQKscn292HPoJlt';

  async onSubmit() {
    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
          to_name: 'Shahadat'
        },
        this.PUBLIC_KEY
      );

      this.submitSuccess = true;
      this.submitMessage = 'Thank you! Your message has been sent successfully.';
      this.formData = { name: '', email: '', subject: '', message: '' };
    } catch (error) {
      this.submitSuccess = false;
      this.submitMessage = 'Something went wrong. Please try again.';
      console.error('EmailJS Error:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
}
