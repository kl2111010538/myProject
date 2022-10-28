import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class SpotifyService {
 getHeader(query: string) {
 const url = 'https://api.spotify.com/v1/' + query;
 let headers = new HttpHeaders();
 headers = headers.append(
 'Authorization',
 // tslint:disable-next-line: max-line-length
 "Bearer BQAS3uDMu4kUXyU-QGopT9lwaMhz7wSfuHXbBs5kLxhZJ85Gx8tXU0v0N-1nWpSEZOW5cDLg1EV0jPY1ZVhd7MyeDMdTXN05H3EaPGcmccgFLQmQf4KTD7oXjIsHXcH38qgDGzNDid4AiuHazJ9YV1ou9faWLyR0BsbjaX1rymgpeiCvyCfIAio9QOEDwgw7Iv4"
 );
 return this._http.get(url, { headers });
 }
 // tslint:disable-next-line: variable-name
 constructor(private _http: HttpClient) {}
 searchMusic(str: string, type = 'artist') {
 const param = '&offset=0' + '&limit=20' + '&type=' + type +
'&market=US';
 const query = 'search?query=' + str + param;
 return this.getHeader(query);
 }
 getArtist(id: string) {
 const query = `artists/${id}`;
 return this.getArtist(query);
 }
}
