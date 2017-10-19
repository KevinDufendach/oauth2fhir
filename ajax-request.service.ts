import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import * as $ from 'jquery';

@Injectable()
export class PatientService {
  state: string;
  code: string;
  params: any;
  tokenUri: string;
  clientId: string;
  secret: string;
  serviceUri: string;
  redirectUri: string;
  data: any;
  options: any;
  name: any;

  constructor(private _http: Http) {
  }

  grabPatient(url: string) {
    return this._http.get(url)
      .map((response: Response) => response.json());
  }

  getUrlParameter(sParam) {
    const sPageURL = window.location.search.substring(1);
    const sURLVariables = sPageURL.split('&');
    for (let i = 0; i < sURLVariables.length; i++) {
      const sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
        const res = sParameterName[1].replace(/\+/g, '%20');
        return decodeURIComponent(res);
      }
    }
  }

  grabState() {
    this.state = this.getUrlParameter('state');
  }

  grabCode() {
    this.code = this.getUrlParameter('code');
  }

  loadSessionApp(): Observable<any> {
    this.grabCode();
    this.grabState();
    this.params = JSON.parse(sessionStorage[this.state]);
    this.tokenUri = this.params.tokenUri;
    this.clientId = this.params.clientId;
    this.secret = this.params.secret;
    this.serviceUri = this.params.serviceUri;
    this.redirectUri = this.params.redirectUri;
    this.data = {
      code: this.code,
      grant_type: 'authorization_code',
      redirect_uri: this.redirectUri
    };
    if (!this.secret) {
      this.data['client_id'] = this.clientId;
    }
    this.options = {
      url: this.tokenUri,
      type: 'POSt',
      data: this.data
    };
    if (this.secret) {
      this.options['headers'] = {'Authorization': 'Basic' + btoa(this.clientId + ':' + this.secret)};
    }
    $.ajax(this.options).done(function (res) {
      const accessToken = res.access_token;
      const patientId = res.patient;
        const url = this.serviceUri + '/Patient/' + patientId;
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer' + accessToken
        }
      }).done(function (pt) {
         this.name = pt;
      });
    });
    return this.name;
  }
}
