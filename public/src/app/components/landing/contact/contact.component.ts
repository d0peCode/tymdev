import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    private email: string;
    private phone: string;
    private message: string;

    constructor(private http: HttpClient) { }

    ngOnInit() {
    }

    async sendMessage() {
        const params = {
            email: this.email,
            phone: this.phone,
            message: this.message
        };
        const response = await this.http.post('http://localhost:3000/api/message/add', params, {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        });
    }
}
