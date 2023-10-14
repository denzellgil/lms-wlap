const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try {
      await database.category.createMany({
        data: [
            { name: "Computer Science"},
            { name: "Fitness"},
            { name: "Engineering"},
            { name: "Accounting"},
            { name: "Philosophy"},
            { name: "Politics"},
            { name: "Architecture"},
        ]
      });
      
      console.log("Success");
    } catch (error) {
    console.log("Error sending the databases categories", error);
    } finally {
        await database.$disconnect();
    }
}

main();