export type RunNutritionPlan = {
  data: {
    preRun: {
      time: string; // e.g. "06:00"
      carbs_g: number; // e.g. 90
      foods: string[]; // e.g. ["Oatmeal with banana", …]
    };
    hydration: {
      preRun_ml: number[]; // e.g. [400, 200]
      duringRun_ml_per_20min: number; // e.g. 150
      addElectrolytes: boolean; // e.g. true
    };
    midRun: {
      startMin: number; // e.g. 40
      carbs_g_per_hour: number; // e.g. 35
      items: string[]; // e.g. ["Energy gel at 07:00", …]
    };
    postRun: {
      windowMin: number; // e.g. 45
      carbs_g: number; // e.g. 70
      protein_g: number; // e.g. 22
      meals: string[]; // e.g. ["Greek yogurt with berries", …]
    };
  };
};
