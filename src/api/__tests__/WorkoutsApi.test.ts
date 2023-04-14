import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { getWorkouts } from "../WorkoutsApi";

describe("WorkoutsApi", () => {
  describe("getWorkouts", () => {
    let data: Array<{ id: number; name: string }>;

    beforeEach(() => {
      const mock = new MockAdapter(axios);
      data = [
        {
          id: 1,
          name: "Push ups",
        },
      ];
      mock.onGet("/api/workouts").reply(200, data);
    });

    it("should return a list of workouts", async () => {
      const contacts = await getWorkouts();
      expect(contacts).toEqual(data);
    });
  });
});
