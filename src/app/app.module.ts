import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //importing to use ngModel fot any components that are part of app.module
import { AppComponent } from './app.component'; //HAVE TO IMPORT THE COMPONENTS
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe'; //ADDING A NEW PIPE (NEED TO ADD TO MODULE)
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [ //COMPONENTS MUST BE DECLARED IN THE MODULE
    AppComponent,
    ProductListComponent, //NEED TO PUT THE NAME HERE OF COMPONENT
    ConvertToSpacesPipe, //PIPE NAME
    StarComponent //NESTED COMPONENT in product.component

  ],
  imports: [
    BrowserModule, //The exported modules that we want for the components(can wokr in browser)
    FormsModule //HAVE TO ADD FormsModule here bc its a module
  ],
  bootstrap: [AppComponent] //defines start up component of the app(boostraps app component)
})
export class AppModule { }
