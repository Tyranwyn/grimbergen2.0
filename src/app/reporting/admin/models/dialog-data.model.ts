import {Crud} from "./crud.enum";

export interface DialogData<R> {
  type: Crud;
  resource?: R;
}
