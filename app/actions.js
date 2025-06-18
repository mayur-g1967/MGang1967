'use server';

import { prisma } from '@/lib/prisma';

// Fetch all products from the database
export async function getUsers() {
  const users = await prisma.Product.findMany({
    select: {
      id: true,
      item: true,
      information: true,
      price: true,
    },
    orderBy: { id: 'desc' }, // Newest first
  });

  return users;
}
