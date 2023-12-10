import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { AppRouter } from "@/pages/api/trpc/[trpc]";

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }
  if (process.env.SERVER) {
    return `${process.env.SERVER}`;
  }
  return "http://localhost:3000";
}

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: getBaseUrl() + '/api/trpc',
        })
      ]
    }
  }
})