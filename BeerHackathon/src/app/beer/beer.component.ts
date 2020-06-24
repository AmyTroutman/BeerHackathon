import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    const data = await this.apiService.get();
    console.log(data);
  }

}
