'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';
import EmojiSwitcher from './EmojiSwitcher';
import { Button } from './ui/button';
import NutritionResults from './NutritionResults';
import type { RunNutritionPlan } from '@/types/Nutritionplan';

const FakeData: RunNutritionPlan = {
  data: {
    preRun: {
      time: '06:00',
      carbs_g: 90,
      foods: ['Oatmeal with banana', 'White toast with honey', 'Orange juice'],
    },
    hydration: {
      preRun_ml: [400, 200],
      duringRun_ml_per_20min: 150,
      addElectrolytes: true,
    },
    midRun: {
      startMin: 40,
      carbs_g_per_hour: 35,
      items: ['Energy gel at 07:00', 'Chews at 07:40'],
    },
    postRun: {
      windowMin: 45,
      carbs_g: 70,
      protein_g: 22,
      meals: [
        'Greek yogurt with berries',
        'Protein shake',
        'Bagel with peanut butter',
      ],
    },
  },
};

//this is metric data
const formSchema = z.object({
  weight: z.number().min(30).max(200),
  age: z.number().min(10).max(100),
  sex: z.enum(['Male', 'Female', 'Other']),
  giProblems: z.boolean(),
  pace: z.number().min(2.5).max(20),
  duration: z.string().time(),
  startTime: z.string().time(),
  runType: z.enum(['Easy', 'Tempo', 'Interval', 'Race', 'Long']),
  weatherDegrees: z
    .number()
    .min(-10, {
      message:
        "It's quite cold. Dress warmly and be cautious of icy conditions below -10°C.",
    })
    .max(35, {
      message:
        "It's very hot. Stay hydrated and avoid running above 35°C if possible.",
    }),
  terrainType: z.enum(['Flat', 'Hilly', 'Trail']),
  distance: z.number().min(1).max(100),
});

export default function RunForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      giProblems: false,
      pace: 6,
      duration: '00:30',
      runType: 'Easy',
      weatherDegrees: 15,
      terrainType: 'Flat',
      distance: 5,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert('submit');
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-8">
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
                  onChange={e => {
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

        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={e => {
                    const value = e.target.valueAsNumber;
                    field.onChange(isNaN(value) ? undefined : value);
                  }}
                />
              </FormControl>
              <FormDescription>How much do you weight (kg)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="distance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Distance</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={e => {
                    const value = e.target.valueAsNumber;
                    field.onChange(isNaN(value) ? undefined : value);
                  }}
                />
              </FormControl>
              <FormDescription>How far are you running (km)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sex"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sex</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your sex" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>

              <FormDescription>What sex are you?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="giProblems"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gastrointestinal problems</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormDescription>
                Do you have any gastrointestinal problems?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pace"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pace</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={e => {
                    const value = e.target.valueAsNumber;
                    field.onChange(isNaN(value) ? undefined : value);
                  }}
                />
              </FormControl>
              <FormDescription>
                About how fast are you planning to run (km/min)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="runType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Run type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your run type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Tempo">Tempo</SelectItem>
                  <SelectItem value="Interval">Interval</SelectItem>
                  <SelectItem value="Race">Race</SelectItem>
                  <SelectItem value="Long">Long</SelectItem>
                </SelectContent>
              </Select>

              <FormDescription>
                What sort of running are you doing today
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="startTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Time</FormLabel>
              <Input onChange={field.onChange} type="time" />
              <FormDescription>
                When are you planning on starting your run
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="terrainType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Terrain type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="select the terrain on your route" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Flat">Flat</SelectItem>
                  <SelectItem value="Hilly">Hilly</SelectItem>
                  <SelectItem value="Trail">Trail</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                What type of surface are you running on
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="weatherDegrees"
          render={({ field }) => (
            <FormItem>
              <div>
                <span className="text-2xl">{field.value}&deg;C</span>{' '}
                <EmojiSwitcher number={field.value} />
              </div>
              <Slider
                value={[field.value ?? 0]}
                onValueChange={value => field.onChange(value[0])}
                min={-20}
                max={45}
                step={1}
              />
              <FormDescription>How warm or cold is the weather</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <AlertDialog>
          <Button asChild disabled={!form.formState.isValid}>
            <AlertDialogTrigger>Submit</AlertDialogTrigger>
          </Button>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Running Recommendations</AlertDialogTitle>
              <AlertDialogDescription className="space-y-4">
                <NutritionResults data={FakeData.data} />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    </Form>
  );
}
