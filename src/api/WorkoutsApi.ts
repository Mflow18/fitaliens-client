import axios from "axios";
import type { WorkoutData } from "./types/Workouts";

const WORKOUT_ROUTE = "/api/workouts";

export async function getWorkouts(): Promise<WorkoutData[]> {
  const { data } = await axios.get(WORKOUT_ROUTE);
  return data;
}
