export interface register {
    name:string,
    mail:string,
    password:string,
  
    phonenumber:string
}
export interface logincredentials{
  mail:string,
  password:string,
}
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
    Result: [];
  }
 