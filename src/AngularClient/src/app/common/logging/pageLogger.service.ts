import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
 
@Injectable()
export class PageLoggerService {
 
  // Observable string sources
  private _log = new Subject<string>();
 
  // Observable string streams
  logStream$ = this._log.asObservable();
 
  // Service message commands
  log(message: string) {
    this._log.next(message);
  }
 
}