import { Component, OnInit } from '@angular/core';
import { CyclesService } from '../service/cycles.service';
import { Cycle } from '../models/cycle';
import { AuthService } from '../service/auth.service';
import { faCartShopping,faArrowUp,faArrowDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cycles',
  templateUrl: './cycles.component.html',
  styleUrls: ['./cycles.component.css']
})

export class CyclesComponent implements OnInit {
  constructor(private cyclesService: CyclesService, public authService: AuthService) { }
  cycles: Cycle[] = [];
  quantityValue: number = 0;
  faCartShopping = faCartShopping;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  ngOnInit(): void {
    this.getCycles();
  }

  getCycles(): void {
    this.cyclesService.getCycles()
      .subscribe(cycles => this.cycles = cycles);
  }

  borrow(id: number): void {
    this.cyclesService.borrowCycle(id)
      .subscribe(cycle => {
        this.cycles = this.cycles.map(c => { return c.id === cycle.id ? cycle : c }) as Cycle[];
      });
  }

  return(id: number): void {
    this.cyclesService.returnCycle(id)
      .subscribe(cycle => {
        this.cycles = this.cycles.map(c => { return c.id === cycle.id ? cycle : c }) as Cycle[];
      });
  }

  restock(id: number, quantity: number): void {
    console.log(id, quantity);
    this.cyclesService.restockCycle(id, quantity)
      .subscribe(cycle => {
        this.cycles = this.cycles.map(c => { return c.id === cycle.id ? cycle : c }) as Cycle[];
      });
  }
}
