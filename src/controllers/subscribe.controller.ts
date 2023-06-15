import { Request, Response } from "express";
import { Subscribe } from "../entities/subscribe.entity";

async function setEmailSubscribe(req: Request, res: Response) {
  try {
    const { email } = req.body;

    const subs = new Subscribe();
    subs.email = email;
    const saved = await subs.save();

    if (saved) return res.send(true);

    return res.status(400).send();
  } catch (error) {
    return res.status(500).send();
  }
}

export { setEmailSubscribe };
