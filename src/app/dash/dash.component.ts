import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { WindowRef } from '../windowRef';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {
  module1: String = 'http://127.0.0.1:5500/index.html';
  scormInitialized: boolean = true;

  constructor(public api: ApiService, private zone: NgZone, private change:ChangeDetectorRef) {
    this.zone.run(() => {
      window['API'] = this.api;
    })
    // win.nativeWindow.API = this.api;
  }

  ngOnInit(): void {
    this.api.scormInitialised.subscribe((flag) => {
      console.log('kunj flag ', flag);
      this.scormInitialized = flag;
      // this.change.detectChanges();x
      console.log('kunj this.scormInitialized ', this.scormInitialized);
      // this.updateScormBoolean(flag);
    });
  }

  // private updateScormBoolean(flag: boolean) {
  //   console.log('method call ', flag, this.scormInitialized);
  // }
  // async ngOnInit(): Promise<void> {
  //   // const subscription = this.api.scormInitialised.subscribe((flag) => {
  //   //   console.log('kunj');
  //   //   this.updateScormBoolean(flag);
  //   // });
  // }
}
