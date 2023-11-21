/*
Built by different modules(set of components) and services that bring functunality across components

Components: export class AppComponent {}
    Template(html)(UI)
    Class: propertiest(data to display to UI) and methods(respond to button check)
    Metadata: extra data about a componennt
      Decorateor: templatea and metadata

    Every web page is a component:
        Welcome Component
        Product List Component
            Star Component (components can be nested within other componenets)
        App Component: ties application pieces together(has menu, tool bars, and provides link to navigate thru diff )
        A index.html and Server to get data from backend

      export class AppComponent {
        showImgae: boolean = false;

        toggleImage(): void{                 METHOD
          this.showImage = true;
        }
      }

Http to get data from back end
Angular CLI to build and deploy app

Typesript: (all javascript is valid typescript) - OOP and data structures
    changes(compiles) to JS when broswers run

package.json: list each package we need for our app
    dependencies: pack for dev and deployment
    devDependencies: pack only for dev(typescript)
    1. npm install to install all the packages in packages.json: it installs all the pack in node_modules
    2. nmp start (start script)

Angular CLI(npm install -g @angular/cli) - close vs code to do this
    HOW TO MAKE angular cli(blank app)
    in blank folder: ng new apm-new --prefix pm
    choose css
    Creates: index.html and app compoenent(menu)

Building a component
  app.component.ts

App.component.ts
  import { Component } from '@angular/core'; // tells angular where to find this function(Component)

  @Component({ //metadata and template (@Component: ids class as component)
    selector: 'pm-root',//whenver pm-root called in html
    templateUrl: './app.component.html', //UI layout
    styleUrls: ['./app.component.css']
  })
    //class become component when given component metadata(needs it to inizialize and work w component)
  export class AppComponent { //CLASS(defines properties and METHODS needed in out UI)
    title = 'Angular: Getting Started'; //property (or could be; pageTitle: string = 'Acme Product Management)
  }
    //export: makes this class available to all components of the app
    //decorator: function that ADDS metadata to class (or prop or methods)
      //@:STart with @
      //ALWAYS ABOVE THE CLASS you are decorating
    //import: in order to use exported members (tells )

bootsrap: need index.html file (put bits of html into index.html)
  selector: 'pm-root'
  so in index.html: <pm-root></pm-root>


App Module:
  components must be declared in an ANGULAR MODULE
  it creates AppComponenet AND BOOTSRAPS IT

IF ERROR: USE FN + F12
  Go to sources, src folder, app, and press on the file and the number you want a breakpoint at
  Refresh browers and it hits breakpoint

  cannot get: use VS code to fix

Templates
  ``: multi line html(inlice) SHORT
  linked: './a.html' (add path to html file using) LONG TEMPLATES

Linking a Template
  make Folder for designated component(or feature): if there is a product feature make a product folder
  create a template SAME NAME as component WITH .component.html in the product folder: product-list.component.html
  use html
  MAKE THE COMPONENT (same name as template but .ts): product-list.component.ts

    using a component as directive:
      look at product-list.component.ts(using <pm-products> </pm-products> in app.component.ts template) BUT TO USE THIS:
      DECLARE producstlist component in angular module (app.module.ts)

Binding (template communicates with the class[passing data])
  {{Template Expression}}: passing the variable into html from class (can also concatinate)


Structural Direcitives(modifies strucure of view)
  *ngIf: If statement (show this table if there are products)
    <table class='table' *ngIf="products.length">
  *ngFor: FOR LOOP
    <tr *ngFor= 'let product of products'> (products is array)[table row = tr]
      for of: iterates over the objects in the array(just the things eazy)
      for in: iterates over the properties IN THE OBJECT (like indexes(0,1,2,))



ARRAY: products: any[] = [ things go here ] (dont know data type so: ANY)


Property Binding( [] = '')
  <img [src] = 'product.imageUrl'> (the image comes from the array)
  <input type = 'text' [disabled] = 'isDisabled'/> (CAN USE BOOOLEAN)

  use {{}} FOR PUTTING IN STRINGS
    <img src='http://myImages.org/{{product.imageUrl}}'>

  [style.margin.px] = 'imageMargin'> <!--imageWidth and margin ARE CLASS PROPERTIES-->
    style.margin.px is a property of the image (how big you want it)
  [style.width.px] = 'imageWidth'

Event Binding(connect an event(button click) to a method in the component)(put paranthesis around event like click)
  <button class='btn btn-primary'
      (click) = 'toggleImage()'> <!--when button clicked: toggleImage method called(just flips the showImage property)-->
      {{showImage ? 'Hide' : 'Show'}} Image <!--TERNNARY IF in JS(if showImage true print hide, if false print show)-->
  </button>

  the method:
    toggleImage(): void{ //void is return type
      this.showImage = !this.showImage; //just flips showImage when method is called IG YOU NEED: this.
    }

Two-way binding (user types in and component gets data as user types)
  [(ngModel)] = 'listFilter': ngModel is an Angular DIRECTIVE
    !!if wwant to use angular directive in template: Need to make it VISIBLE to the angular compiler (BY app.module.ts)!!
      ngModel is part of FormsModule so need to import it in app.module.ts

Pipes (CHANGES PROPERTIES BEFORE DISPLAY (like adding CURRENCY, datE, number, percentage )) |
    {{ product.productCode}} | lowercase (makes property lower case before displaying ti)
        OR property binding
    <img [title] = 'product.productName | uppercase'>

    multiple pipes(make currency USD lowercase: usd)
      {{ product.price | currency | lowercase }}

    Pipe parameters
      {{ product.price | currency: 'USD' : 'symbol' : '1.2-2' }} //which currency, use $ instead of USD, 'min number of whole ints. min number of decimal sigits - max number of fractional digits

More on components (IProduct)
    Interface(to specify data types OF THINGS LIKE IN AN ARRAY)-TO MAKE SURE ALL VARIABLE IN ARRAY HAVE A TYPE(so make interface for custom types)
      import { IProduct } from './product //have to import the interface to the component where the array is

      product: IProduct[] = [things in array];

      THIS IS IN DIFFERENT FILE (product.ts)
      export interface Iproduct {
        productId: number;
        productName: string;
        releaseData: Date;
      }

      Encaptulating CSS(in the @Component)
        make file SAME NAME(product-list.component.css)
        styleUrls: ['./product-list.component.css']
        can add more just add commas

  Lifecycle hook(interface that we use to write code that is executed when component lifecycle event occurs(CREATE, RENDER, CREATE AND RENDER CHILDREN, PROCESS CHANGES, DESTORY))
      when a compononent is first initialized we might first want the data from the page
      OnInit(get data for template from back end): component initialization, retrieve data
      OnChanges(do acttion after change to input properties)
      OnDestroy: do cleanup

      NEED TO import lifecyle hook( import { Component, OnInit } from '@angular/core';)
      THEN implement in class
      FINALLY write code for hook method

  Custom Pipe(convert data something different before showing it out)
        use when you need APPLICATION UNIQUE DATA(data only in certain apps) TRANSFORMATIONS
      NEED TO ADD IT TO app.module.ts as a DECLARATION
      MAKING A FILE (convert-to-spaces.pipe.ts) IN shared folder because its pretty broad and basic

  JS GETTERS AND SETTERS (USE FOR FILTERING user input) [USE FOR GETTING SOMETHING AND SETTING IT TO SOMETHING]
      private _amount: number = 0; (private vars only avail with getters and setters) HAVE _ INFRONT(_ammount)

      get amount(): number {
        //return ammount from private storage
        return this._amount;
      }

      set amount(value: number){
        //set private variable ammount
        this._amount = value
      }

    FILTERING
      How:
        product: IProduct[] = [...] (we have array of PRODUCTS)

        filter(): JS function(creates NEW ARRAY from old array according to filter parameter(logic for filtering USING ARROW FUNCTION))

        product: IProduct[] = [...] (we have array of PRODUCTS)

        performFilter(): IProduct[] {  //(IProduct[]: what data type the function is(array data type instead of any))
          this.listFilter = this.listFilter.toLocaleLowerCase(); //lower case to makre sure match

          return this.products.filter((product: IProduct) => //returns new array of products(passing in arrow function for filter logic)
              product.productName..toLocaleLowerCase().includes(this.listFilter)); //IF listFilter(user input) is in productName(lower case just to make sure) return true(ADD TO NEW ARRAY)
        }

        includes(): returns true or false IF parameter string(this.listFilter) is in value(product.productName)


      Arrow Functions:(USE WHEN PASSING FUNCTION(logic for filtering) INTO ANOTHER FUNCTION(filter()))
      from this:
        capital(product: IProduct): string { //ig product is an object
          return product.productName.toUpperCase();
        }
      to this:
        (product: IProduct) => product.productName.toUpperCase();
        paramater => what it does
      need a return(multiple statement):
        (product: IProduct) => {
          product.productName.toUpperCase();
          return product.productName.toUpperCase();
        }

      !! MAKE SURE TO CHANGE TEMPLATE :
          <tr *ngFor="let product of filteredProducts"> <!--LOOOOP put the loop in the table row(each product gets a row)-->
              //filteredProducts(set in the settter method) instead of products

Nested components
        -they comunicate together (SO PASS DATA BACK AND FORTH)
        -Can use as routing target(appears that travel to another view)
    -want to use nested comp if:
        >template is fragment of larger view
        >has selector(SO WE CAN USE AS DIRECTIVE: <pm-root></pm-root>)
        >communicated with its container(the component its in)

  Building Nested component (!!Nesting this start component(nested/child comp) (to show stars) in the ProductList component(container/parent)!!)
      1. create STartComponent files [.ts, .html, .css] (can be used by any feature in app: SO ITS IN SHARED FOLDER)
          -using property binding([title], [style.width.px]): to set how many stars and how many pixels according to stars rating
              -using OnChanges(DO SOMETHING after CHANGE in INPUT property): to changed pixesl according to rating(DONT FORGET TO IMPLEMENT)

      2. USE nested component as DIRECTIVE (<pm-star></pm-star>) IN product-list.component.html
        !!if want to use star component as directive: NEED TO DECLARE IT IN app.module.ts(same angular module where our container is)!!

      3. Use Input Properties (so nested/child can get info from container/parent: SO IT CAN DISPLAY RIGHT # OF STARS)
              -Container inputs into nested componenT AND Nested Outputs by events(if click on stars) to container
        -@Input decorator(can USE ON ANY PROPERTY on how many we want)
            @Input() rating: number = 0; (in star.component.ts(the nested))
            <pm-star [rating]="product.starRating"> <!--!!!BINDING TO @Input() rating, SETTING rating to value WE WANT TO PASS!!! -->
                                                    <!--now product.starRating is bound to @Input() rating IN star.component.ts-->

  Handling click events on stars(click event binding)
        1. <div class="crop"
            (click) = 'onClick()'> <!--BINDING CLICK on stars to onClick() methos-->
        2. onClick(): void {
            console.log(`The Rating ${this.rating} was clicked!`);
          }

  Sending data from this event ^ to container(parent) [@Output()]
            -@Output() must be put to an event (EventEmitter obj)
            -SENDING DATA FROM template nested component TO container
      - want the rating to show up in the title
    1. create event obj: @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); (passed string event)
    2. Send message to container
        onClick(): void {
          //emitting message to container (use EVENT BINDING so container can LISTEN)
          this.ratingClicked.emit(`The Rating ${this.rating} was clicked!`);
        }
    3. Use event binding so container LISTEN FOR MESSAGE: (ratingClicked)="onRatingClicked($event)">
          <!--ratingClicked: name of event prodicuct-list.compononent.ts is listening to from star.component.ts
                        once it hears it: onRatingClicked() method is called
                        $event: passing data that the event called ot the onRatingClicked() method
          -->
    4.set up the container method (WHAT HAPPEN WHEN THE EVENT IS CALLES[when stars are clicked])
        onRatingClicked(message: string): void {
          this.pageTitle = 'Product List: ' + message;
        }

Services and Dependency Injection (share data across components) [USE THIS INTEAD OF COMPONENTS BC EZ TO DEBUG, TEST, AND REUSE  ]
  !!SAME AS A CLASS!!
        -service: class with focused purpose ( featureS that are independent from any other component (UNIQUE))
            -share data across components
            - enpasulating extenral interaction (DATA ACCESS) - what er're doing

    Creating service for providing data
        -Register service with angular INJECTOR(maintains service instances) and angular creates AND HOLDS instance of this class(singleton)
        -Dependency Injection: component needs the service: define the service as a dependency and Injector injects the class instance when the component class instantiates
            -share the data with class that use this service

  1. Build a service: (same steps as building component)[service that provides us with products]
  -create file in products(bc holds list of products)
    1: create service class
    2: define medata data with decorator (@)
    3: import what we need\
    ex: @Injectable()
        export class ProductService{ //properties and methods are AVAIL to any class that user this service

  2. Registering Service
        -Root Injector: service avail thru all app
        -Component Injector: service only avial to that component and its child/nested (multiple intasces of service (stars service called for each row))
    -register in root app: (BEST WAY!!!): (IN the service file duh)
          @Injectable ({
            providedIn: 'root'
          })


    -register in specific component:
          @Component({
            provider: [ProductService]
          })

  3. Injecting Service (dependency injection - instance of service)
          -NEED CONSTRUCTOR (its usually invisible but need to type it)
        ex:
          //defining product.service.ts AS DEPENDENCY in product-list.component.ts (short hand way to do it)
            //ang INJECTS inst of ProductService into productService
          //code to call service?
          constructor(private productService: ProductService) {}

      -need to call service: (onInit is best):
      //!!!Using OnInit bc good place to retrive data
      ngOnInit(): void { //YOU NEED 1 METHOD FOR lifecycle hook( initializes the component and then GETS DATA FROM BACKEND )
        //calling product service
        this.products = this.productService.getProducts(); //this.products holds all the products
        this.filteredProducts = this.products //we're using filteredProducts to show to the template

      }



Services(hold the data and sends it to components)
      -create file: ng g s nameOfFile
    1.create method in service.ts: getEmployee()
    2.REgister with Injector(register with app.module in providers and make sure to put it intop)
    3.Declare method as dependency in component Construtor
    4. put method in ngOnNit


httpClient




Agular/HTML tricks
    TOGGLES VALUE (NO FUNCTION):(click) = "panelExpanded != panelExpanded"


JS tricks
     -to concatinate value ez: `the rating is ${rating}`
*/
