import { z } from "zod";
import { ActionState } from "@/lib/create-safe-action";
import { UpdateBoard } from "@/actions/update-board/schema";
import { Board } from "@prisma/client";

export type InputType = z.infer<typeof UpdateBoard>;
export type ReturnType = ActionState<InputType, Board>;