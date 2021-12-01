import { ApplicationRef, ChangeDetectorRef, Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private zone: NgZone, private appRef: ApplicationRef) {
    // this.zone.run(() => {
    //   window['API'] = window['API'] || {};
    //   window['API'].LMSInitialize = this.LMSInitialize.bind(this);
    //   window['API'].LMSCommit = this.LMSCommit.bind(this);
    //   window['API'].LMSFinish = this.LMSFinish.bind(this);
    //   window['API'].LMSGetDiagnostic = this.LMSGetDiagnostic.bind(this);
    //   window['API'].LMSGetValue = this.LMSGetValue.bind(this);
    //   window['API'].LMSSetValue = this.LMSSetValue.bind(this);
    //   window['API'].LMSGetLastError = this.LMSGetLastError.bind(this);
    //   window['API'].LMSGetErrorString = this.LMSGetErrorString.bind(this);
    // });
  }

  scormInitialised: Subject<boolean> = new Subject();
  // window =
  SCORM = {};

  scormData = {};

  scormMainContent = {
    mastery_score: '',
    score_raw: ':',
    scormData: JSON.stringify(this.scormData),
    lesson_mode: 'live',
    lesson_location: 'index.html',
    suspend_data:
      '{"v":2,"d":[123,34,112,114,111,103,114,101,115,115,34,58,256,108,263,115,111,110,265,267,34,49,266,256,99,266,49,44,257,281,48,48,283,105,278,34,48,290,280,58,282,34,289,275,292,275,294,49,125,304,305,283,112,266,53,304],"cpv":"6ieA3rIq"}',
  };

  getValueFromLMS = function (varName) {
    let varValue = null;
    switch (varName) {
      //   case "cardId":
      //     varValue = scormObj.cardId;
      //     break;
      //   case "cardPid":
      //     varValue = scormObj.cardPid;
      //     break;

      //   case "cardPerformanceComplete":
      //     varValue = scormObj.cardPerformanceComplete;
      //     break;

      //   case "cardPerformanceId":
      //     varValue = scormObj.cardPerformanceId;
      //     break;

      case 'cmi.core.student_name':
        varValue = 'Manan Shah';
        break;

      case 'cmi.core.lesson_mode':
        varValue = this.scormMainContent.lesson_mode;
        break;

      case 'cmi.mode':
        varValue = this.scormMainContent.lesson_mode;
        break;

      case 'cmi.suspend_data':
        varValue = this.scormMainContent.suspend_data;
        break;

      case 'cmi.learner_name':
        varValue = 'Manan Shah';
        break;

      //   case "cmi.core.student_id" || "cmi.learner_id":
      //     varValue = user.id();
      //     break;

      case 'cmi.learner_id':
        varValue = '1234';
        break;

      /* case "adlcp:masteryscore":
              varValue = scormObj.mastery_score;
              break;
  
            case "cmi.core.score.raw":
              varValue = this.scormMainContent.score_raw;
              break;
  
            case "cmi.score.raw":
              varValue = this.scormMainContent.score_raw;
              break;
  */
      // case 'cmi.core.lesson_location':
      //   varValue = 'index.html#/lessons/w9fXbu_74bpn3TRxjnV5Wr3z7LHbpOsQ';
      //   break;
      /*
            case "cmi.location":
              varValue = this.scormMainContent.lesson_location;
              break;
  
            case "cmi.launch_data":
              varValue = "";
              break;
  
            case "cmi.core.credit":
              varValue = this.scormMainContent.credit;
              break;
  
            case "cmi.credit":
              varValue = this.scormMainContent.credit;
              break;
  
            case "cmi.core.lesson_status":
              varValue = this.scormMainContent.lesson_status;
              break;
  
            case "cmi.completion_status":
              varValue = this.scormMainContent.lesson_status;
              break;
  
            case "cmi.core.entry":
              varValue = this.scormMainContent.entry;
              break;
  
            case "cmi.entry":
              varValue = this.scormMainContent.entry;
              break;
  
            case "cmi.core.total_time":
              // debugger;
              varValue = this.scormMainContent.total_time;
              break;
  
            case "cmi.total_time":
              varValue = this.scormMainContent.total_time;
              break;
  
            case "cmi.progress_measure":
              varValue = this.scormMainContent.progress_measure;
              break;
  
            case "cmi.interactions._count":
              if (
                this.scormMainContent.interactions === "null" ||
                (this.scormMainContent.interactions &&
                  !JSON.parse(this.scormMainContent.interactions))
              ) {
                varValue = 0;
                break;
              }
              varValue =
                this.scormMainContent.interactions &&
                JSON.parse(this.scormMainContent.interactions).length;
              break;
  
            case "cmi.interactions":
              varValue =
                this.scormMainContent.interactions &&
                JSON.parse(this.scormMainContent.interactions);
              break; */

      default:
        varValue = '';
    }
    return varValue;
  };

  LMSInitialize = (input) => {
    console.log('Kunj LMSInitialize::', input);
    this.scormInitialised.next(false);
    this.appRef.tick();
  };
  LMSFinish = (input) => {
    console.log('LMSFinish::', input);
  };
  LMSGetValue = (element) => {
    console.log('NAN::', element);
    return this.getValueFromLMS(element);
  };
  LMSSetValue = (element, value) => {
    console.log('MANAN::', element, 'THERE', value);
  };
  LMSCommit = (input) => {
    console.log('LMSCommit::', input);
  };
  LMSGetLastError = () => {
    console.log('LMSGetLastError::');
  };
  LMSGetErrorString = (errorCode) => {
    console.log('LMSGetErrorString::', errorCode);
  };
  LMSGetDiagnostic = (errocCode) => {
    console.log('LMSGetDiagnostic::', errocCode);
  };
}
