interface User{
    id : String,
    name? : String, // ? this question mark sign here states that the name heree is optionsl
    age : number,
    email :  String,
    password : String
}



type updateProps = Pick<User, "name" | "age" | "email">

type updatedPropsOptional = Partial<updateProps>; // this will allow user to give any of the two or one values not allo of them

const updateUser = (updatedProps:updatedPropsOptional)=>{
    // Hit the backend to upadat the user
} 