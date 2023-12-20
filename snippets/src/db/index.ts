import { PrismaClient } from "@prisma/client";

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const prismaClientSingleton = () => new PrismaClient();

const globalForPrisma = globalThis as unknown as {
  db: PrismaClientSingleton | undefined;
};

const db = globalForPrisma.db ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== "production") globalForPrisma.db = db;
