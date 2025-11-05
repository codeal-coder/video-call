import { Router } from "express";
import { login, register } from "../controllers/user.controllers.js";
import { addToHistory,getUserHistory } from "../controllers/meeting.controllers.js";

const router = Router();
//you can write like this
//Works well if you have only one HTTP method for the route.
//router.post("/login",login)
//router.post("/register",register);


// router.route(path) creates a route object.
// You can chain multiple HTTP methods on the same route:

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/add_to_activity").post(addToHistory);
router.route("/get_all_activity").get(getUserHistory);

export default router;