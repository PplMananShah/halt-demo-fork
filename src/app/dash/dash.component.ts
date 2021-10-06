import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {
  module1: String = 'http://127.0.0.1:5500/index.html';
  constructor() {}

  async ngOnInit(): Promise<void> {
    // window =
    let SCORM = {};

    const scormData = {};

    const scormMainContent = {
      mastery_score: '',
      score_raw: ':',
      scormData: JSON.stringify(scormData),
      lesson_mode: 'live',
      lesson_location: 'index.html',
      suspend_data:
        '{"v":2,"d":[123,34,112,114,111,103,114,101,115,115,34,58,256,108,263,115,111,110,265,267,34,49,266,256,99,266,49,44,257,281,48,48,283,105,278,34,48,290,280,58,282,34,289,275,292,275,294,49,125,304,283,277,301,281,288,290,300,279,281,304,125,283,50,293,309,297,311,319,295,315,283,51,323,296,298,256,312,34,302,316,276,328,335,318,308,324,326,337,283,52,337,305,34,345,340,329,322,350,325,34,53,328,310,299,346,354,327,350,283,112,285,287,321,359,363,368,331,360,306,357,371,291,373,34,339,313,295,358,372,353,374,385,379,378,362,381,351,369,391,354,349,391,383,377,387,307,394,317,378,356,370,330,399,394,347,54,375,407,332,334,315,335,396,284,58,50,53,398,414,320,413,378,401,371,347,380,429,335,390,432,347,55,375,365,295,286,423,412,352,409,335,428,302,442,400,343,388,353,430,443,393,333,314,347,434,448,376,424,341,336,387,431,334,342,387,418,415,417,455,384,445,283,405,397,462,378,411,387,437,406,444,457,324,347,56,451,57,360,335,439,52,51,304],"cpv":"0XmOfuPk"}',
    };

    const getValueFromLMS = function (varName) {
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
          varValue = scormMainContent.lesson_mode;
          break;

        case 'cmi.mode':
          varValue = scormMainContent.lesson_mode;
          break;

        case 'cmi.suspend_data':
          varValue = scormMainContent.suspend_data;
          break;

        case 'cmi.learner_name':
          varValue = 'Manan Shah';
          break;

        //   case "cmi.core.student_id" || "cmi.learner_id":
        //     varValue = user.id();
        //     break;

        //   case "cmi.learner_id":
        //     varValue = user.id();
        //     break;

        /* case "adlcp:masteryscore":
            varValue = scormObj.mastery_score;
            break;

          case "cmi.core.score.raw":
            varValue = scormMainContent.score_raw;
            break;

          case "cmi.score.raw":
            varValue = scormMainContent.score_raw;
            break;
*/
        case 'cmi.core.lesson_location':
          varValue = 'index.html#/lessons/w9fXbu_74bpn3TRxjnV5Wr3z7LHbpOsQ';
          break;
        /*
          case "cmi.location":
            varValue = scormMainContent.lesson_location;
            break;

          case "cmi.launch_data":
            varValue = "";
            break;

          case "cmi.core.credit":
            varValue = scormMainContent.credit;
            break;

          case "cmi.credit":
            varValue = scormMainContent.credit;
            break;

          case "cmi.core.lesson_status":
            varValue = scormMainContent.lesson_status;
            break;

          case "cmi.completion_status":
            varValue = scormMainContent.lesson_status;
            break;

          case "cmi.core.entry":
            varValue = scormMainContent.entry;
            break;

          case "cmi.entry":
            varValue = scormMainContent.entry;
            break;

          case "cmi.core.total_time":
            // debugger;
            varValue = scormMainContent.total_time;
            break;

          case "cmi.total_time":
            varValue = scormMainContent.total_time;
            break;

          case "cmi.progress_measure":
            varValue = scormMainContent.progress_measure;
            break;

          case "cmi.interactions._count":
            if (
              scormMainContent.interactions === "null" ||
              (scormMainContent.interactions &&
                !JSON.parse(scormMainContent.interactions))
            ) {
              varValue = 0;
              break;
            }
            varValue =
              scormMainContent.interactions &&
              JSON.parse(scormMainContent.interactions).length;
            break;

          case "cmi.interactions":
            varValue =
              scormMainContent.interactions &&
              JSON.parse(scormMainContent.interactions);
            break; */

        default:
          varValue = '';
      }
      return varValue;
    };

    window['API'] = {
      LMSInitialize: (input) => {
        console.log('LMSInitialize::', input);
        window;
      },
      LMSFinish: (input) => {
        console.log('LMSFinish::', input);
      },
      LMSGetValue: (element) => {
        console.log('NAN::', element);
        return getValueFromLMS(element);
      },
      LMSSetValue: (element, value) => {
        console.log('MANAN::', element, 'THERE', value);
      },
      LMSCommit: (input) => {
        console.log('LMSCommit::', input);
      },
      LMSGetLastError: () => {
        console.log('LMSGetLastError::');
      },
      LMSGetErrorString: (errorCode) => {
        console.log('LMSGetErrorString::', errorCode);
      },
      LMSGetDiagnostic: (errocCode) => {
        console.log('LMSGetDiagnostic::', errocCode);
      },
    };
  }
}
