import { createTRPCReact } from "@trpc/react-query";

import { type AppRouter } from "@/pages/api/trpc/[trpc]";

export const trpc = createTRPCReact<AppRouter>({});