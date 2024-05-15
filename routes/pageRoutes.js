import { Router } from "express";
const router = Router();

router.route("/").get(async (req, res) => {
  return res.render("home", { title: "Home" });
});

router.route("/about").get(async (req, res) => {
  return res.render("about", { title: "About" });
});

router.route("/contact").get(async (req, res) => {
  return res.render("contact", { title: "Contact" });
});

export default router;
