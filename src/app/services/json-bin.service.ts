import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { BinRecord, BinResponse } from "../models/bin.interface";

@Injectable()
export class JsonBinService {
  private httpClient = inject(HttpClient);
  private baseUrl = 'https://api.jsonbin.io/v3/b/';

  getBinList(bin: string): Observable<BinResponse<BinRecord[]>> {
    return this.httpClient.get<BinResponse<BinRecord[]>>(this.baseUrl + bin, {
      headers: this.getHeaders()
    });
  }

  saveBinList(song: BinRecord[]): Observable<BinResponse<BinRecord[]>> {
    return this.httpClient.post<BinResponse<BinRecord[]>>(this.baseUrl, song, {headers: this.getHeaders()});
  }

  updateBinList(updatedSongs: BinRecord[], bin: string): Observable<BinResponse<BinRecord[]>> {
    return this.httpClient.put<BinResponse<BinRecord[]>>(this.baseUrl + bin, updatedSongs, {
      headers: this.getHeaders()
    });
  }

  deleteBinList(bin: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + bin, {
      headers: this.getHeaders()
    });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Master-Key': '$2a$10$SrTJ69xSlDJlYTB6sS2Imuq2jnHHoJT0YwPV7zuqMfGmBlFcjd4za'
    });
  }
}
