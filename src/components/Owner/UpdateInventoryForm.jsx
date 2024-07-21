import * as productsService from "../../utilities/products-service";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "../ui/spinner";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import dayjs from "dayjs";

export default function UpdateInventoryForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitData = async (event) => {
    setIsLoading(true);

    try {
      const { fruit, price, startingStock, remainingStock } = event;
      const formData = {
        fruit,
        price,
        startingStock,
        remainingStock: remainingStock || startingStock,
      };

      const product = await productsService.updateInventory(formData);
      setIsLoading(false);
      reset();

      toast({
        title: "Inventory Successfully Updated",
        description: dayjs(new Date().toISOString()).format(
          "DD-MMM-YYYY HH:mm"
        ),
      });
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
              {...register("fruit", { required: "Name of fruit is required." })}
            />
            {errors.fruit && (
              <p className="text-sm text-destructive pl-3">
                {errors.fruit.message}
              </p>
            )}

            <Label htmlFor="fruit">Price</Label>
            <Input
              id="price"
              placeholder="Price"
              {...register("price", { required: "Price is required." })}
            />
            {errors.price && (
              <p className="text-sm text-destructive pl-3">
                {errors.price.message}
              </p>
            )}

            <Label htmlFor="starting-stock">Starting Stock</Label>
            <Input
              id="starting-stock"
              placeholder="Starting stock"
              {...register("startingStock", {
                required: "Starting stock is required.",
              })}
            />
            {errors.startingStock && (
              <p className="text-sm text-destructive pl-3">
                {errors.startingStock.message}
              </p>
            )}

            <Label htmlFor="remaining-stock">Available Stock</Label>
            <Input
              id="remaining-stock"
              placeholder="Available stock"
              {...register("remainingStock")}
            />
            {errors.stock && (
              <p className="text-sm text-destructive pl-3">
                Remaining stock is required.
              </p>
            )}

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
