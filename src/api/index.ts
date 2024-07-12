import { setAxiosAuth } from "./client";

import auth from "./endpoints/auth";

setAxiosAuth();

export default {
  auth,
};
