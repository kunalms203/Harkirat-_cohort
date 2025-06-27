const {z} = require("zod");

const todoSchema = z.object({
    title : z.string(),
    description : z.string(),
    deadline : z.date().optional(),
    isCompleted : z.boolean().default(false)
});

module.exports = todoSchema;