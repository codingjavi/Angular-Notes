import { Component } from "@angular/core";



@Component({
  selector: 'pm-root', //prefix each thing (pm), root bc this is root app component (NAME OF COMPONENT when index.html)[not needed if not used for html]
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
})//pass in obj so {}
export class AppComponent { //creating class
  pageTitle: string = 'Acme Product Management';
}

