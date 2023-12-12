// pages/index.tsx
import { trpc } from "../../utils/trpc";
import styles from "@/styles/Rest.module.scss";

const Home = () => {
  // Using the generated hooks for crudRead route
  const { data: crudReadData, error: crudReadError }: any =
    trpc.crudRead.useQuery();

  // Using the generated hooks for crudCreate route
  const createMutation = trpc.crudCreate.useMutation();

  // Using the generated hooks for crudUpdate route
  const updateMutation = trpc.crudUpdate.useMutation();

  // Using the generated hooks for crudDelete route
  const deleteMutation = trpc.crudDelete.useMutation();

  // Using the generated hooks for news route (without type)
  const { data: newsData, error: newsError }: any = trpc.news.useQuery({
    type: "all",
  });
  console.log({ newsData, newsError });

  // Using the generated hooks for news route (with type="sports")
  const { data: sportsNewsData, error: sportsNewsError }: any =
    trpc.news.useQuery({ type: "sports" });

  // Using the generated hooks for movie route
  const { data: movieData, error: movieError }: any = trpc.movie.useQuery();

  // Using the generated hooks for anime route
  const { data: animeData, error: animeError }: any = trpc.anime.useQuery();

  // Using the generated hooks for manga route
  const { data: mangaData, error: mangaError }: any = trpc.manga.useQuery();

  if (
    crudReadError ||
    newsError ||
    sportsNewsError ||
    movieError ||
    animeError ||
    mangaError
  ) {
    return <div>Error loading data</div>;
  }

  return (
    <div className={styles.restbody}>
      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <h1>CRUD Data</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            gap: "0.5rem",
          }}
        >
          {crudReadData?.data.map((item: any) => (
            <div
              key={item.id}
              className="route"
              style={{ padding: "1rem", margin: "1rem" }}
            >
              {JSON.stringify(item)}
            </div>
          ))}
        </div>

        <h2>Create Data</h2>
        <button
          className="btn"
          onClick={() =>
            createMutation.mutate({
              id: 1,
              name: "New Item",
              github: "new-item",
            })
          }
        >
          Create Item
        </button>

        <h2>Update Data</h2>
        <button
          className="btn"
          onClick={() =>
            updateMutation.mutate({
              id: crudReadData?.data.slice(-1)[0]._id,
              name: "Updated Item",
              github: "updated-item",
            })
          }
        >
          Update Item
        </button>

        <h2>Delete Data</h2>
        <button
          className="btn"
          onClick={() =>
            deleteMutation.mutate({
              id: crudReadData?.data.slice(-1)[0]._id,
            })
          }
        >
          Delete Item
        </button>
      </div>

      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <h1>[All] News Data</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            gap: "0.5rem",
          }}
        >
          {newsData?.data.articles.slice(-20).map((article: any) => (
            <div
              key={article.id}
              className="route"
              style={{
                padding: "0.5rem 1rem",
                margin: "1rem",
                minWidth: "2rem",
              }}
            >
              {article.title}
            </div>
          ))}
        </div>
      </div>

      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <h1>[Sports] News Data</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            gap: "0.5rem",
          }}
        >
          {sportsNewsData?.data.articles.slice(-20).map((article: any) => (
            <div
              key={article.id}
              className="route"
              style={{
                padding: "0.5rem 1rem",
                margin: "1rem",
                minWidth: "2rem",
              }}
            >
              {article.title}
            </div>
          ))}
        </div>
      </div>

      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <h1>Movie Data</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            gap: "0.5rem",
          }}
        >
          {movieData?.data.results.map((item: any) => (
            <div
              key={item.id}
              className="route"
              style={{
                padding: "0.5rem 1rem",
                margin: "1rem",
                minWidth: "2rem",
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <h1>Anime Data</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            gap: "0.5rem",
          }}
        >
          {animeData?.data.map((item: any) => (
            <div
              key={item.id}
              className="route"
              style={{
                padding: "0.5rem 1rem",
                margin: "1rem",
                minWidth: "2rem",
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <h1>Manga Data</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            gap: "0.5rem",
          }}
        >
          {mangaData?.data.map((item: any) => (
            <div
              key={item.id}
              className="route"
              style={{
                padding: "0.5rem 1rem",
                margin: "1rem",
                minWidth: "2rem",
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
