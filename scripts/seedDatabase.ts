import prisma from "@/app/(backend)/lib/prisma";

async function seedDatabase() {
  await prisma.user.create({
    data: {
      email: "franco.mitoire@gm2dev.com",
      name: "Franco",
      lastName: "Mitoire",
      age: 2300,
    },
  });
}

seedDatabase()
  .then(() => console.log("Database seeded!"))
  .catch((e) => console.error(e));
