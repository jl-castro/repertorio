import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { JsonBinService } from "./services/json-bin.service";
import { BinService } from "./services/bin.service";
import { BinRecord } from "./models/bin.interface";
import { take } from "rxjs";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "./pipes/filter.pipe";
import { MatCheckbox } from "@angular/material/checkbox";
import { CategoryFilterPipe } from "./pipes/category-filter.pipe";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatOption, MatSelect } from "@angular/material/select";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, FilterPipe, CategoryFilterPipe, MatFormField, MatSelect, MatOption, MatLabel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [BinService, JsonBinService]
})
export class AppComponent implements OnInit {
  private binService = inject(BinService);
  private jsonBinService = inject(JsonBinService);
  private bin = '';
  public categoryList: string[] = [];
  public recordList: BinRecord[] = [];
  public searchFilter = '';
  public categorySelected = 'Todos';
  public byArtist = false;
  public byCategory = false;
  public worshipFilterActive = true;

  constructor() {
    this.categoryList.push('Adoracion');
    this.categoryList.push('Gozo');
    this.categoryList.push('Regocijo');
    this.categoryList.push('Todos');
  }

  ngOnInit() {
    this.getToken();
  }

  private getToken(): void {
    this.binService.getBinToken().pipe(take(1)).subscribe(response => {
      if (response) {
        this.bin = response.record.currentBin;
        sessionStorage.setItem('bin', this.bin);
        this.getJsonBinList();
      }
    });
  }

  private getJsonBinList(): void {
    this.jsonBinService.getBinList(this.bin).pipe(take(1)).subscribe(response => {
      if (response) {
        this.recordList = [...response.record];
      }
    });
  }
}
