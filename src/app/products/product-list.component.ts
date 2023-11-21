//import { Component } from '@angular/core';(DONT NEED THIS AS IT ALREADY INCLUDED IN OnInit)
import { IProduct } from './product'; //!!have to import the interface!!
import { Component, OnInit } from '@angular/core'; //importing OnInit lifecycle hook
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products', //pm: part of product management application(products feature)
    //can put <pm-products> </pm-products> into app.component.ts template to use THIS COMPONENT AS A DIRECITVE
  templateUrl: './product-list.component.html', //link to template(relative path ./product-list.component.html)
  styleUrls: ['./product-list.component.css']   //LINKIING the css template to html

})
export class ProductListComponent implements OnInit{ //need to implememt for lifecycle hook
  pageTitle: string = "Product List!" //variable to pass to html
  imageWidth: number = 50; //SETTING HOW BIG THE IMAGES ARE!!! INT IS number in typescript (this is just a property )
  imageMargin: number = 2;
  showImage: boolean = false; //KEEP TRACK IF IMAGES ARE SHOWN


  //listFilter: string = 'cart'; //default string in filter by box NO MORE
  //SETTING GETTERS AND SETTERS FOR FILTERING user input

  //Private variable whose value is MANAGED BY getter and setter(MAKE SURE USE _ before variable)
  private _listFilter: string = '';

  get listFilter(): string {
    //code TO PROCES THE VARIBLE B4 RETURNIN IT
    return this._listFilter //THIS BC ITS IN ITS OWN CLASS
  }

  set listFilter(value: string) { // parameter: value(user input) which we're ASSIGNING TO the listFilter var
    this._listFilter = value;
    console.log('In Setter: ', value);
    //storing the returned filtered array into filteredProducts
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = []; //where we'll store the new filtered array(data type IProduct so each thign in array has data type)
  products: IProduct[] = [];          //putting ARRAY of products (!!CHANGING ANY TO IProduct interface!!)



  //defining product.service.ts AS DEPENDENCY in product-list.component.ts (short hand way to do it)
    //ang INJECTS inst of ProductService into productService
  //code to call service?
  constructor(private productService: ProductService) {}

  //CREATING FILTER METHOD
  performFilter(filterBy: string): IProduct[] {
    //lowercase user input first(just making sure lol)
    filterBy = filterBy.toLocaleLowerCase();
    //return new filtered array
    return this.products.filter((product: IProduct) => //returns new array of products(passing in arrow function for filter logic)
      product.productName.toLocaleLowerCase().includes(filterBy)); //IF filterBy(user input) is in productName(LOWERCASED just makign sure) return true(ADD TO NEW ARRAY)
  }

  //METHODS go AFTER PROPERTIES
  toggleImage(): void{ //void is return type
    this.showImage = !this.showImage; //just flips showImage when method is called IG YOU NEED: this.
  }

  //!!!Using OnInit bc good place to retrive data
  ngOnInit(): void { //YOU NEED 1 METHOD FOR lifecycle hook( initializes the component and then GETS DATA FROM BACKEND )
    //calling product service
    this.products = this.productService.getProducts(); //this.products holds all the products
    this.filteredProducts = this.products //we're using filteredProducts to show to the template

  }

  //method whenver stars clicked( WHEN nested component send data to container component)
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
