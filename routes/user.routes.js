import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../Middleware/auth.middleware.js";
const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => res.send({ title: "Create new user" }));
userRouter.put("/:id", (req, res) => res.send({ title: "Update useer" }));
userRouter.delete("/:id", (req, res) => res.send({ title: "Delete user" }));

export default userRouter;
