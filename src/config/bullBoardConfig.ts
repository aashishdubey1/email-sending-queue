// config/bullBoardConfig.ts
import { Express } from "express";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { createBullBoard } from "@bull-board/api";
import { ExpressAdapter } from "@bull-board/express";
import emailQueue from "../queues/emailQueue";

export function setupBullBoard(app: Express) {
  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath("/ui");

  createBullBoard({
    queues: [new BullMQAdapter(emailQueue)],
    serverAdapter,
  });

  app.use("/ui", serverAdapter.getRouter());
}
