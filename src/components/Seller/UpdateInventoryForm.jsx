import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "../ui/spinner";
import { useState } from "react";

export default function UpdateInventoryForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = async (event) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    try {
      const { fruit, price, stock } = event;
      const formData = { fruit, price, stock };

      const product = await productService.updateInventory(formData);
    } catch (error) {
      console.log("Unable to update inventory", error);
    }
  };

  return (
    <div className="grid gap-6">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit(submitData)}>
          <div className="grid gap-2">
            <Label htmlFor="fruit">Fruit</Label>
            <Input
              id="fruit"
              placeholder="Name of fruit"
              {...register("fruit", { required: true })}
            />
            {errors.fruit && <p>Name of fruit is required.</p>}

            <Label htmlFor="fruit">Price</Label>
            <Input
              id="price"
              placeholder="Price"
              {...register("price", { required: true })}
            />
            {errors.price && <p>Price is required.</p>}

            <Label htmlFor="stock">Stock</Label>
            <Input
              id="stock"
              placeholder="Starting stock"
              {...register("stock", { required: true })}
            />
            {errors.stock && <p>Starting stock is required.</p>}
            <Label htmlFor="price">Stock</Label>

            <Button type="submit" disabled={isLoading}>
              {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
