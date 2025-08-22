import { z } from "zod";
const userSchema = z.object({
    name: z.string(),
    id: z.number().int(),
});
const kunal = {
    name: "kuanl",
    id: 4
};
console.log(kunal);
//# sourceMappingURL=zodinfer.js.map