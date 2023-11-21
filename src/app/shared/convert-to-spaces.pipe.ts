//creating CUSTOM PIPES
  //REMEMBER: we need to tell app.module ABOUT NEW PIPE
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ //pipe decorator
  name: 'convertToSpaces' //NAME USED IN HTML
})

//create pipe class
export class ConvertToSpacesPipe implements PipeTransform{ //IMPLEMENTING THE PipeTransform interface

  transform(value: string, character: string): string { // NEED transform method( value: data type of what we want to replace, character: data type of the replacent)
      //parameters: what we pass in the html: convertToSpaces: '-'
    return value.replace(character, ' '); //JS replace method
  }

}
