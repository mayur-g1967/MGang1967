import { createProduct } from './actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function CreateUserPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>

      <form action={createProduct} className="space-y-4">
        <div>
          <Label htmlFor="item">Item</Label>
          <Input id="item" name="item" className="border border-blue-900" />
        </div>

        <div>
          <Label htmlFor="information">Information</Label>
          <Input id="information" name="information" className="border border-blue-900" />
        </div>

        <div>
          <Label htmlFor="price">Price</Label>
          <Input id="price" type="number" name="price" className="border border-blue-900" />
        </div>

        <Button type="submit" className="bg-blue-900 text-white">
          Submit
        </Button>
      </form>
    </>
  );
}
