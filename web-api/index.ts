import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const category = await prisma.category.create({
        data: {
            description: "Microprocesadores"
        }
    });

    console.log(category);
}

main()
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })