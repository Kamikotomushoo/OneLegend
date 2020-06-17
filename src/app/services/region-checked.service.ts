
import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RegionCheckedService {
  isChecked = new BehaviorSubject<boolean>(false);
  constructor() {}

}
