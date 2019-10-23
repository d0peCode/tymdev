import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    email: string;
    phone: string;
    message: string;
    success: boolean;

    constructor(private http: HttpClient) { }

    ngOnInit() {
    }

    async sendMessage() {
        const params = new FormData();
        params.append('email', this.email);
        params.append('message', this.message);
        params.append('phone', this.phone);
        console.log('send msg', params);

        this.http
            .post('https://tymdev.pl/api/routes/sendMail.php', params)
            .subscribe(() => {
                this.success = true;
            });
    }
}
