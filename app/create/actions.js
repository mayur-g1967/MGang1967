'use server';

import { prisma } from '@/lib/prisma';

export async function createProduct(formData) {
  const item = formData.get('item');
  const information = formData.get('information');
  const price = parseFloat(formData.get('price'));

  if (!item || !information || isNaN(price)) return;

  await prisma.product.create({
    data: {
      item,
      information,
      price,
    
    },
  });
}
