import { Component, OnInit } from '@angular/core';
import { CyclesService } from '../cycles.service';
import { Cycle } from '../Cycle';

@Component({
  selector: 'app-cycles',
  templateUrl: './cycles.component.html',
  styleUrls: ['./cycles.component.css']
})
export class CyclesComponent implements OnInit {
  constructor(private cyclesService: CyclesService) { }
  cycles: Cycle[] = [];


  ngOnInit(): void {
    this.getCycles();
  }

  getCycles(): void {
    console.log("getCycles() called");
    this.cyclesService.getCycles()
      .subscribe(cycles => this.cycles = cycles);
  }
}
