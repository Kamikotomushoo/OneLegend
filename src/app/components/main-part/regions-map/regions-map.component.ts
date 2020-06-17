import { Component, OnInit, OnDestroy, OnChanges } from "@angular/core";
import RegionsData from "../../../../assets/regions-data.json";
import { IRegionData } from "../../../interfaces/regions.interface";
import { RegionCheckedService } from "../../../services/region-checked.service";

@Component({
  selector: "app-regions-map",
  templateUrl: "./regions-map.component.html",
  styleUrls: ["./regions-map.component.scss"]
  // providers: [RegionCheckedService]
})
export class RegionsMapComponent implements OnInit {
  regionsDataList: Array<IRegionData>;
  checkedRegion: IRegionData;
  isChecked: Boolean = false;

  constructor(private regionCheckedService: RegionCheckedService) {
    this.regionCheckedService.isChecked.subscribe(isChecked => {
      this.isChecked = isChecked;
      console.log(this.isChecked);
    });
  }

  ngOnInit() {
    this.regionsDataList = RegionsData;
    console.table(this.regionsDataList);
    this.checkedRegion = null;
  }

  private openDetail(regionData: IRegionData) {
    console.log(regionData);
    this.checkedRegion = regionData;
    this.regionCheckedService.isChecked.next(true);
  }
}
