import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { ErrorHandler, Injectable, NgModule } from "@angular/core";

@NgModule()
export class ExceptionHandler {
  errorHandler(error: HttpErrorResponse) {
    let msg: String;
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      msg = `Status code : ${error.status}, Msg : ${error.error.message}`;
    }
    // return an observable with a user-facing error message
    return throwError(
      msg);
  }
}
