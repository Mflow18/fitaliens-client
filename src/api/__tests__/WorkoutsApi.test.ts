import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { getWorkouts } from "../WorkoutsApi";

describe("ContactsApi", () => {
  describe("getContacts", () => {
    let data: Array<{ id: number; name: string }>;

    beforeEach(() => {
      const mock = new MockAdapter(axios);
      data = [
        {
          id: 1,
          name: "John Doe",
        },
      ];
      mock.onGet("/api/contacts").reply(200, data);
    });

    it("should return a list of contacts", async () => {
      const contacts = await getWorkouts();
      expect(contacts).toEqual(data);
    });
  });
});
