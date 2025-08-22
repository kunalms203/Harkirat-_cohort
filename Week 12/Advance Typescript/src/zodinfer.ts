import {z} from "zod";

const userSchema = z.object({
  name: z.string(),
  id: z.number().int(),
});

type User = z.infer<typeof userSchema>

const kunal:User = {
    name:"kuanl",
    id:4
}

console.log(kunal);