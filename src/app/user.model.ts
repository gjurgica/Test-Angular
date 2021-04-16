export class UserModel {
     id: number;
     email:string;
     password:string;
     created? = new Date();
     constructor(id: number, email: string,password:string) {
        this.id = id;
        this.email = email;
        this.password = password;
      }
    
}