import { Component, OnInit, Input } from '@angular/core';
import { IRegionData } from 'src/app/interfaces/regions.interface';
import { RegionCheckedService } from 'src/app/services/region-checked.service';

@Component({
  selector: 'app-region-detail-window',
  templateUrl: './region-detail-window.component.html',
  styleUrls: ['./region-detail-window.component.scss']
})
export class RegionDetailWindowComponent implements OnInit {

  @Input() regionData: IRegionData;

  constructor(private regionCheckedService: RegionCheckedService) { }

  ngOnInit() {
    
  }

  private close() {
    console.log("ZAKRIVAYUUUU");
    this.regionCheckedService.isChecked.next(false);
  }

}
