import type { RunNutritionPlan } from '@/types/Nutritionplan';

export default function NutritionResults({ data }: RunNutritionPlan) {
  return (
    <div className="space-y-4">
      <section>
        <h2>Pre run Food</h2>
        <p>
          <strong>Food suggestions: </strong>
          {data.preRun.foods.join(', ')}
        </p>
        <p>
          <strong>Carbohydrates estimate: </strong>
          {data.preRun.carbs_g}
        </p>
      </section>
      <section>
        <h2>Hydration</h2>
        <p>
          <strong>Pre run hydration: </strong>
          {data.hydration.preRun_ml[0] + 'ml 1h before run'}
          {' and ' + data.hydration.preRun_ml[1] + 'ml 15min before start'}
        </p>
        <p>
          <strong>During run hydration/20 min: </strong>
          {data.hydration.duringRun_ml_per_20min + 'ml'}
        </p>
        <p>
          <strong>Add electrolytes:</strong>
          {data.hydration.addElectrolytes
            ? ' consider taking some electrolytes'
            : ' electrolytes probably unnecessary'}
        </p>
      </section>
      <section>
        <h2>Mid run food</h2>
        <p>
          <strong>Grams of carbs/h: </strong>
          {data.midRun.carbs_g_per_hour}
        </p>
        <p>
          <strong>Food suggestions: </strong>
          {data.midRun.items.join(', ')}
        </p>
      </section>
      <section>
        <h2>Post run food</h2>
        <p>
          <strong>Grams of carbs: </strong>
          {data.postRun.carbs_g}
        </p>
        <p>
          <strong>Grams of protein : </strong>
          {data.postRun.protein_g}
        </p>
        <p>
          <strong>Food suggestions: </strong>
          {data.postRun.meals.join(', ')}
        </p>
      </section>
    </div>
  );
}
