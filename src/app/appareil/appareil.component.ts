import { Component, Input, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';
import { AppareilService } from '../services/appareil.sevice';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus === 'allumé'){
      return 'green'
    }else if(this.appareilStatus === 'éteint'){
      return 'red';
    }
  };

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

}
