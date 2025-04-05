import { PrismaClient } from '@prisma/client'

// Crear una instancia global de PrismaClient para evitar múltiples instancias en desarrollo
const globalForPrisma = global

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma