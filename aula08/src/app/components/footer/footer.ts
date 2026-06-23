
import { Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  localData: string;

  constructor(){
const agora = DateTime.now();
this.localData = agora.toLocaleString(DateTime.DATETIME_FULL);
  }
}
