// trpc.ts
// Follow : https://www.youtube.com/watch?v=2LYM8gf184U
import { initTRPC } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";

// Importing datas
import News from "../../../database/News.json";
import ModifiedNews from "../../../database/ModifiedNews.json";
import Movie from "../../../database/Movie.json";
import Anime from "../../../database/Anime.json";
import Manga from "../../../database/Manga.json";
const connectDataBase = require("../config/database");
import WebCRUDs from "../config/schema";

const t = initTRPC.create();

interface Data {
  status: string;
  totalResults: number;
  data: any;
}

interface ErrorResponse {
  error: string;
}

interface Article {
  type: string;
  articles: any;
}

const Result = z.object({
  status: z.string(),
  totalResults: z.number(),
  data: z.object({
    articles: z.array(z.object({})), // Adjust based on your article schema
  }),
});

const appRouter = t.router({
  crudRead: t.procedure.query(async () => {
    try {
      await connectDataBase();
      const fetchData = await WebCRUDs.find({});
      return { data: fetchData };
    } catch (error) {
      return { error: "Internal Server Error" };
    }
  }),
  crudCreate: t.procedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        github: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        if (!input.id || !input.name || !input.github) {
          return { error: "ID,Name,GitHub fields are required" };
        }
        await connectDataBase();
        const createdData = await WebCRUDs.create(input);
        return { data: createdData };
      } catch (error) {
        return { error: "Internal Server Error" };
      }
    }),
  crudUpdate: t.procedure
    .input(
      z.object({
        id: z.string(), // in rest we use to get this from header
        name: z.string(), // in rest we use to get this from body
        github: z.string(), // in rest we use to get this from body
      }),
    )
    .mutation(async ({ input }) => {
      try {
        if (!input.id || !input.name || !input.github) {
          return { error: "ID,Name,GitHub fields are required" };
        }
        await connectDataBase();
        const updateData = await WebCRUDs.findByIdAndUpdate(
          input.id,
          { name: input.name, github: input.github },
          { new: true }, // Return the updated document
        );
        if (updateData) {
          return { data: updateData };
        } else {
          return { error: "Not Found" };
        }
      } catch (error) {
        return { error: "Internal Server Error" };
      }
    }),
  crudDelete: t.procedure
    .input(
      z.object({
        id: z.string(), // in rest we use to get this from header
      }),
    )
    .mutation(async ({ input }) => {
      try {
        if (!input.id) {
          return { error: "ID is required" };
        }
        await connectDataBase();
        const deleteData = await WebCRUDs.findByIdAndDelete(input.id);
        if (deleteData) {
          return { data: deleteData };
        } else {
          return { error: "Not Found" };
        }
      } catch (error) {
        return { error: "Internal Server Error" };
      }
    }),
  news: t.procedure
    .input(
      z
        .object({
          type: z.string().nullable(),
        })
        .nullable(),
    )
    .query(({ input }: any) => {
      try {
        // Your existing logic for fetching news data
        if (input.type === null || input === null || input.type === "all") {
          return {
            status: "ok",
            totalResults: News.articles.length,
            data: { articles: News.articles },
          };
        } else {
          const filterData: Article | undefined = ModifiedNews.find(
            (ele) => ele.type === input.type,
          );

          return {
            status: "ok",
            totalResults: filterData?.articles.length || 0,
            data: { articles: filterData?.articles || [] },
          };
        }
      } catch (error) {
        return { error: "Internal Server Error" };
      }
    }),
  movie: t.procedure.query(() => {
    try {
      return { status: "ok", totalResults: Movie.results.length, data: Movie };
    } catch (error) {
      return { error: "Internal Server Error" };
    }
  }),
  anime: t.procedure.query(() => {
    try {
      return { status: "ok", totalResults: Anime.length, data: Anime };
    } catch (error) {
      return { error: "Internal Server Error" };
    }
  }),
  manga: t.procedure.query(() => {
    try {
      return { status: "ok", totalResults: Manga.length, data: Manga };
    } catch (error) {
      return { error: "Internal Server Error" };
    }
  }),
});

export type AppRouter = typeof appRouter;
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
