import { Component, OnInit } from "@angular/core";
import RegionsData from "../../../../assets/regions-data.json";
import { IRegionData } from "../../../interfaces/regions.interface";
import { RegionCheckedService } from 'src/app/services/region-checked.service.js';

@Component({
  selector: "app-regions-map",
  templateUrl: "./regions-map.component.html",
  styleUrls: ["./regions-map.component.scss"]
})
export class RegionsMapComponent implements OnInit {
  regionsDataList: Array<IRegionData>;
  checkedRegion: IRegionData;
  isChecked: Boolean = false;

  constructor(private regionCheckedService: RegionCheckedService) {

  }

  ngOnInit() {
    this.regionsDataList = RegionsData;
    console.table(this.regionsDataList);
    this.checkedRegion = null;
    this.regionCheckedService.isChecked.subscribe(isChecked => {
      this.isChecked = isChecked;
      console.log(this.isChecked);
    });

  }

  private openDetail(regionData: IRegionData) {
    console.log(regionData);
    this.checkedRegion = regionData;
    this.regionCheckedService.isChecked.next(true);
  }
}
