import { Component, OnInit } from '@angular/core';
import { Attempt } from '../../classes/attempt';
import {MatTableDataSource} from '@angular/material';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {

  constructor(private gatewayService: GatewayService) { }

  public attempts: Attempt[];
  displayedColumns = ['name', 'date', 'score', 'view'];
  dataSource: MatTableDataSource<Attempt>;

  getAttemptsById(id: number): void {
    this.gatewayService.getAttemptsById(id).subscribe(
      (attempts: Attempt[]) => {
        this.attempts = attempts.sort((attempt1, attempt2) => attempt1.createdDate - attempt2.createdDate);
        this.dataSource = new MatTableDataSource(attempts);
      },
      error => console.log(`Error: ${error}`)
    );
  }

  ngOnInit() {
    this.getAttemptsById(44);
  }

}
