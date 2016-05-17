function dateFormatter(date){
  
var dateLength = date.length;
//target date string ==> dd/mm/yyyy
var dateString = '';
    switch (dateLength) {
            case 10: //dd/mm/yyyy
                  dateString += date;
                  break;
                  
            case 9: //d/mm/yyyy @ dd/m/yyyy
                  var dd = date.split('/');// dd=[d,m,y]
                  
                 var y = dd[2];
                 var m = (dd[1].length == 2?(dd[1]):('0'+dd[1]));
                 var d = (dd[0].length == 2?(dd[0]):('0'+dd[0]));

                  dateString += d;
                  dateString += '/';
                  dateString += m;
                  dateString += '/';
                  dateString += y;
                  break;

            case 8: //dd/mm/yy @ d/m/yyyy
                  var dd = date.split('/');
                 var y = (dd[2].length == 2?('20'+dd[2]):dd[2]);
                 var m = (dd[1].length == 2?(dd[1]):('0'+dd[1]));
                 var d = (dd[0].length == 2?(dd[0]):('0'+dd[0]));

                  dateString += d;
                  dateString += '/';
                  dateString += m;
                  dateString += '/';
                  dateString += y;
                  break;

            case 7://mm/yyyy @ d/mm/yy @ dd/m/yy
                 var dd = date.split('/');
                 var y = (dd.length == 3?('20'+dd[2]):dd[1]);
                 var m = (dd.length == 3?(dd[1].length==1?('0'+dd[1]):dd[1]):dd[0]);
                 var d = (dd.length == 2?(m!=2?('30'):'28'):(dd[0].length==1?('0'+dd[0]):dd[0]));
                  dateString += d;
                  dateString += '/';
                  dateString += m;
                  dateString += '/';
                  dateString += y;
                  break;

            case 6://d/m/yy
                 var dd = date.split('/');
                 var y = dd[2];
                 var m = dd[1];
                 var d =dd[0];

                 dateString += '0';
                  dateString += d;
                  dateString += '/0';
                  dateString += m;
                  dateString += '/';
                   dateString += '20';
                  dateString += y;
                  break;

            case 5://mm/yy
                 var dd = date.split('/');
                 var y = (dd.length==2?(dd[1].length == 2?('20'+dd[1]):dd[1]):'Invalid');
                 var m = (dd.length==2?dd[0]:'Invalid');
                 var d = (dd.length==2?(m==2?('28'):'30'):'Invalid');
                  dateString += d;
                  dateString += '/';
                  dateString += m;
                  dateString += '/';
                  dateString += y;
                  break;

            case 4://m/yy
                 var dd = date.split('/');
                 var y = (dd[1].length == 2?('20'+dd[1]):dd[1]);
                 var m = (dd[0].length == 1?('0'+dd[0]):dd[0]);
                 var d =(m!=2?('30'):'28');
                  dateString += d;
                  dateString += '/';
                  dateString += m;
                  dateString += '/';
                  dateString += y;
                  break;

            default://does not match any of the format, return original string
                  dateString += date;
                  break;
      }
  return dateString;
}
