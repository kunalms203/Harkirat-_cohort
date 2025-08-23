//npm prisma only not @types
//run npx prisma init
//npx prisma migrate dev --name init
import { PrismaClient } from "./generated/prisma";
const prisma = new PrismaClient();

const createUser = async(email:string,firstName:string,lastName:string,password:string)=>{
    await prisma.user.create({
    data:{
        email:email,
        last_name:lastName,
        first_name:firstName,
        password:password
    },
    select:{
        last_name:true
    }
})
}

interface updateParams{
    lastName : string,
    firstName: string
}

const updateUser = async(email:string,{lastName,firstName}:updateParams)=>{
    prisma.user.update({
        where:{
            email:email
        },
        data:{
            first_name:firstName,
            last_name:lastName
        },
        select:{
            first_name:true,
            last_name:true
        }

    })
}