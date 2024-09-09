import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { BinResponse, BinToken } from "../models/bin.interface";

@Injectable()
export class BinService {
  private httpClient = inject(HttpClient);
  private baseUrl = 'https://api.jsonbin.io/v3/b/66d4a29fe41b4d34e4289a77';

  getBinToken(): Observable<BinResponse<BinToken>> {
    return this.httpClient.get<BinResponse<BinToken>>(this.baseUrl, {
      headers: this.getHeaders()
    });
  }

  updateBinToken(updatedSongs: BinToken): Observable<BinResponse<BinToken>> {
    return this.httpClient.put<BinResponse<BinToken>>(this.baseUrl, updatedSongs, {
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
