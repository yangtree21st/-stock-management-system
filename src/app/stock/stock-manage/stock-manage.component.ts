import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock(1, 'The first stock', 10.00, 4.5, 'a technology stock with a good potential profitability', ['IT', 'Internet']),
      new Stock(2, 'The Second stock', 20.00, 4.5, 'The second stock I created to practice Angular', ['Financial', 'Trust fund']),
      new Stock(3, 'The Third stock', 30.00, 3.5, 'The third stock I created to practice Angular', ['IT', 'blockchain']),
      new Stock(4, 'The Fourth stock', 40.00, 2.5, 'The fourth stock I created to practice Angular', ['IT', 'Internet']),
      new Stock(5, 'The Fifth stock', 50.00, 3.5, 'The fifth stock I created to practice Angular', ['Real estate']),
      new Stock(6, 'The Sixth stock', 60.00, 4.5, 'The sixth stock I created to practice Angular', ['IT', 'Internet']),
      new Stock(7, 'The Seventh stock', 70.00, 4.0, 'The seventh stock I created to practice Angular', ['IT', 'Internet']),
      new Stock(8, 'The Eighth stock', 80.00, 5.0, 'The eighth stock I created to practice Angular', ['IT', 'Internet'])
    ];
  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public descr: string,
              public categories: Array<string>) {

  }
}
