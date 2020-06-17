import { Component, OnInit } from '@angular/core';
import RuneterraData from '../../../assets/runeterra-data.json';

@Component({
  selector: 'app-main-part',
  templateUrl: './main-part.component.html',
  styleUrls: ['./main-part.component.scss']
})
export class MainPartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.dir(RuneterraData);
    let arrListData: Array<{region: string, name: string}> = [];
    RuneterraData.forEach(item => {
      arrListData.push({region: item.regionRef.toLowerCase(), name: item.name});
    });

    console.table(arrListData);


  }

}
