import { Router } from "express";
const router = Router();

router.route("/").get(async (req, res) => {
  return res.render("home");
});

router.route("/about").get(async (req, res) => {
  return res.render("about");
});

router.route("/contact").get(async (req, res) => {
  return res.render("contact");
});

export default router;
