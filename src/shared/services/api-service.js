import { ajax } from 'rxjs/ajax';
import { map, catchError, of } from 'rxjs';
import {ConfigType} from '../../environment/config' 
export default function ajaxObs(params) {
    const accessToken = ''
    const headers = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${accessToken}`
    }
    const ajax$ = ajax({
        url: `${ConfigType.API_BASE_URL}${params.url}`,
        method: params.method,
        headers: headers,
        body: params.body
      }).pipe(
        map(response => {return response.response}),
        catchError(error => {
          console.log('error: ', error);
          return of(error);
        })
      );
  
    return ajax$;
  }