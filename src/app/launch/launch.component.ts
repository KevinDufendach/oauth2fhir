// import { Component } from '@angular/core';
// import {createScope} from "@angular/core/src/profile/wtf_impl";
//
// @Component({
//   selector: 'app-launch',
//   templateUrl: './launch.component.html',
//   styleUrls: ['./launch.component.css']
// })
// export class LaunchComponent {
//   clientId: string;
//   secret: any;
//   serviceUri: string;
//   launchContextId: string;
//   scope: any;
//   state: string;
//   launchUri: string;
//   redirectUri: string;
//   conformanceUri: string;
//   tokenUri: string;
//   authUri: string;
//   smartExtension: any;
//   constructor() { }
//   launch() {
//     this.clientId = 'fc2c76f6-fe32-45d6-bfb2-d531dbb6fc68';
//     this.secret = null;
//     this.serviceUri = getUrlParameter('iss');
//     this.launchContextId = getUrlParameter('launch');
//     this.scope = [
//       'patient/*.read',
//       'launch'
//     ].join(' ');
//     this.state = Math.round(Math.random() * 1000000000).toString();
//     this.launchUri = window.location.protocol + '//' + window.location.host + window.location.pathname;
//     this.redirectUri = this.launchUri.replace('launch', 'afterlaunch');
//     this.conformanceUri = this.serviceUri + '/metadata';
//     $.get(this.conformanceUri, function(r){
//       this.smartExtension = r.rest[0].security.extension.filter(function (e){
//         return (e.url === 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris');
//       });
//       this.smartExtension[0].extension.forEach(function(arg, index, array){
//         if (arg.url === 'authorize') {
//           this.authUri = arg.valueUri;
//         } else if (arg.url === 'token') {
//           this.tokenUri = arg.valueUri;
//         }
//       });
//       sessionStorage[this.state] = JSON.stringify({
//         clientId: this.clientId,
//         secret: this.secret,
//         serviceUri: this.serviceUri,
//         redirectUri: this.redirectUri,
//         tokenUri: this.tokenUri
//       });
//       window.location.href = this.authUri + '?' +
//         'response_type=code&' +
//         'client_id=' + encodeURIComponent(this.clientId) + '&' +
//         'scope=' + encodeURIComponent(this.scope) + '&' +
//         'redirect_uri=' + encodeURIComponent(this.redirectUri) + '&' +
//         'aud=' + encodeURIComponent(this.serviceUri) + '&' +
//         'launch=' + this.launchContextId + '&' +
//         'state=' + this.state;
//     }, 'json');
//     function getUrlParameter(sParam) {
//       const sPageURL = window.location.search.substring(1);
//       const sURLVariables = sPageURL.split('&');
//       for (let i = 0; i < sURLVariables.length; i++) {
//         const sParameterName = sURLVariables[i].split('=');
//         if (sParameterName[0] === sParam) {
//           const res = sParameterName[1].replace(/\+/g, '%20');
//           return decodeURIComponent(res);
//         }
//       }
//     }
//   }
// }
