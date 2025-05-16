"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

//this is metric data
const formSchema = z.object({
  weight: z.number().min(30).max(200),
  age: z.number().min(10).max(100),
  sex: z.enum(["Male", "Female", "Other"]),
  giProblems: z.boolean(),
  pace: z.number().min(2.5).max(20),
  duration: z.string().time({ precision: 2 }),
  startTime: z.string().time({ precision: 2 }),
  runType: z.enum(["Easy", "Tempo", "Interval", "Race", "Long"]),
  weatherDegrees: z
    .number()
    .min(-30, { message: "Temperature is extremely cold. Be cautious when running below -30°C." })
    .max(45, { message: "Temperature is extremely hot. Avoid running above 45°C." }),
  terrainType: z.enum(["Flat", "Hilly", "Trail"]),
  distance: z.number().min(1).max(100),
});

export default function RunForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      giProblems: false,
      pace: 6,
      duration: "00:30",
      runType: "Easy",
      weatherDegrees: 15,
      terrainType: "Flat",
      distance: 5,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.valueAsNumber;
                    field.onChange(isNaN(value) ? undefined : value);
                  }}
                />
              </FormControl>
              <FormDescription>How old are you</FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
