import React, { useState } from "react";
import styles from "@/styles/Rest.module.scss";
import { FaPlay } from "react-icons/fa";
import TrpcCode from "@/database/TrpcCodes";
import { CopyBlock, monoBlue } from "react-code-blocks";
import FetchBox from "@/components/FetchBox";
import { trpc } from "@/utils/client";

const TRPC = () => {
  const [fetchData, setFetchData] = useState(
    "USE THE tRPC APIs by clicking on Routes",
  );
  const [loading, setLoading] = useState(false);
  // hook calls : trpc
  // let { data: crudReadQuery? erro?.datar: crudReadError }: any = trpc.crudRead.useQuery();
  const crudReadQuery: any = trpc.crudRead.useQuery();
  const createMutation: any = trpc.crudCreate.useMutation();
  const updateMutation: any = trpc.crudUpdate.useMutation();
  const deleteMutation: any = trpc.crudDelete.useMutation();
  const { data: newsData, error: newsError }: any = trpc.news.useQuery({
    type: "all",
  });
  const { data: sportsNewsData, error: sportsNewsError }: any =
    trpc.news.useQuery({ type: "sports" });
  const { data: movieData, error: movieError }: any = trpc.movie.useQuery();
  const { data: animeData, error: animeError }: any = trpc.anime.useQuery();
  const { data: mangaData, error: mangaError }: any = trpc.manga.useQuery();

  const crudReadRefetch = async () => {
    try {
      // crudReadQuery.refetch()
      crudReadQuery
        .refetch()
        .then((res: any) => {
          setFetchData(JSON.stringify(res.data.data.slice(-10) || res.error));
        })
        .catch((err: any) => {
          setFetchData(JSON.stringify(err.error));
        });
    } catch (error) {
      console.log("Error refetching crudRead data : ", error);
      setFetchData(JSON.stringify(error));
    }
  };

  const handleFetch = async (num: Number) => {
    setLoading(true);
    let data: any;
    if (num === 0) {
      setFetchData(
        JSON.stringify(
          crudReadQuery.data.data.slice(-10) || crudReadQuery.error,
        ),
      );
    }
    if (num === 1) {
      createMutation.mutate(
        {
          id: 1,
          name: "New Item",
          github: "new-item",
        },
        {
          onSuccess: () => {
            crudReadRefetch();
            // setFetchData(JSON.stringify(createMutation));
          },
        },
      );
    }
    if (num === 2) {
      updateMutation.mutate(
        {
          id: crudReadQuery?.data?.data.slice(-1)[0]._id,
          name: "Updated Item",
          github: "updated-item",
        },
        {
          onSuccess: () => {
            crudReadRefetch();
            // setFetchData(JSON.stringify(updateMutation));
          },
        },
      );
    }
    if (num === 3) {
      deleteMutation.mutate(
        {
          id: crudReadQuery?.data?.data.slice(-1)[0]._id,
        },
        {
          onSuccess: () => {
            crudReadRefetch();
            // setFetchData(JSON.stringify(deleteMutation));
          },
        },
      );
    }
    if (num === 4) {
      setFetchData(JSON.stringify(newsData || newsError));
    }
    if (num === 5) {
      setFetchData(JSON.stringify(sportsNewsData || sportsNewsError));
    }
    if (num === 6) {
      setFetchData(JSON.stringify(movieData || movieError));
    }
    if (num === 7) {
      setFetchData(JSON.stringify(animeData || animeError));
    }
    if (num === 8) {
      setFetchData(JSON.stringify(mangaData || mangaError));
    }

    setLoading(false);
  };
  return (
    <div className={styles.restbody}>
      <FetchBox data={fetchData} loading={loading} />
      <div className={`cloudyBgDiv ${styles.herosection}`}>
        <div className={styles.data}>
          <h1>tRPC</h1>
          <p>
            tRPC (Type-safe Remote Procedure Call) is a modern framework for
            building APIs that prioritizes type safety and ease of use. It
            ensures that the communication between server and client is
            type-safe, meaning that the data structures and functions used are
            explicitly defined and enforced, reducing the risk of runtime
            errors. tRPC simplifies the development process by generating
            TypeScript types on the client side based on the server-defined API,
            enabling seamless and error-resistant communication. With a focus on
            developer ergonomics, tRPC aims to make API development robust and
            efficient, allowing developers to work confidently and effectively
            across different parts of the application.
          </p>
          <h2>Base Address</h2>
          <div className="route">
            <div>
              <span className="type">BA</span>{" "}
              <span className="vip">https://web-api-azure.vercel.app</span>{" "}
              <span className="detail">Base</span>
            </div>
          </div>
          <p>
            Demo Page for tRPC :{" "}
            <a className="btn" href="/trpc/example">
              /trpc/example
            </a>{" "}
          </p>
        </div>
      </div>

      {/* CRUD */}
      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <div className={styles.data}>
          <h1>CRUD</h1>
          <p>
            Your can perform the basic CRUD operations on this route. It
            operates on the tables present on our mongoDB server.
          </p>

          <h2>Schema</h2>
          <p>
            As stored in MongoDB. Here "_id" and "__v" are the fields which are
            filled by mongoDB itself
          </p>
          <div className="schema">
            <p>
              ID : <span>Number</span>
            </p>
            <p>
              Name : <span>String</span>
            </p>
            <p>
              Github : <span>String</span>
            </p>
            <p>
              _id : <span>String</span>
            </p>
            <p>
              __v : <span>String</span>
            </p>
          </div>
          <h2>Routes</h2>
          {TrpcCode[0].map((code: any, index: number) => {
            return (
              <div
                className="trpcCode"
                key={index}
                title="Click on the route to see tRPC API in action"
                onClick={() => {
                  handleFetch(index);
                }}
              >
                <span className="type">{code.type}</span>
                <CopyBlock
                  text={code.code}
                  language="typescript"
                  showLineNumbers={true}
                  theme={monoBlue}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* NEWS */}
      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <div className={styles.data}>
          <h1>NEWS</h1>
          <p>
            You can get 2 types of news on the same route using query params
            used in REST APIs
          </p>
          <h2>Unfiltered News</h2>
          <p>
            You can get high amount of NEWS, which are not filtered based on the
            fields related
          </p>
          {TrpcCode[1].map((code: any, index: number) => {
            return (
              <div
                className="trpcCode"
                key={index}
                title="Click on the route to see tRPC API in action"
                onClick={() => {
                  handleFetch(4 + index);
                }}
              >
                <span className="type">{code.type}</span>
                <CopyBlock
                  text={code.code}
                  language="typescript"
                  showLineNumbers={true}
                  theme={monoBlue}
                />
              </div>
            );
          })}
          <h2>Filtered News</h2>
          <p>
            You can get hundred of NEWS, which are filtered based on the fields
            related
          </p>
          {TrpcCode[2].map((code: any, index: number) => {
            return (
              <div
                className="trpcCode"
                key={index}
                title="Click on the route to see tRPC API in action"
                onClick={() => {
                  handleFetch(5 + index);
                }}
              >
                <span className="type">{code.type}</span>
                <CopyBlock
                  text={code.code}
                  language="typescript"
                  showLineNumbers={true}
                  theme={monoBlue}
                />
              </div>
            );
          })}
          Parameters given to "type" query :
          <div className="schema">
            <p>
              1. <span>all</span>
            </p>
            <p>
              2. <span>general</span>
            </p>
            <p>
              3. <span>entertainment</span>
            </p>
            <p>
              4. <span>business</span>
            </p>
            <p>
              5. <span>health</span>
            </p>
            <p>
              6. <span>science</span>
            </p>
            <p>
              7. <span>sports</span>
            </p>
            <p>
              8. <span>technology</span>
            </p>
          </div>
        </div>
      </div>

      {/* Movie */}
      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <div className={`${styles.data} centered`}>
          <h1>Movie</h1>
          <p>You can get movie data for your movie projects!</p>

          <h2>Route</h2>
          <p>You can get high quality data for Movies.</p>
          {TrpcCode[3].map((code: any, index: number) => {
            return (
              <div
                className="trpcCode"
                key={index}
                title="Click on the route to see tRPC API in action"
                onClick={() => {
                  handleFetch(6 + index);
                }}
              >
                <span className="type">{code.type}</span>
                <CopyBlock
                  text={code.code}
                  language="typescript"
                  showLineNumbers={true}
                  theme={monoBlue}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Anime */}
      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <div className={`${styles.data} centered`}>
          <h1>Anime</h1>
          <p>You can get Anime data for your Anime realted projects!</p>

          <h2>Route</h2>
          <p>You can get high quality data for Animes.</p>
          {TrpcCode[4].map((code: any, index: number) => {
            return (
              <div
                className="trpcCode"
                key={index}
                title="Click on the route to see tRPC API in action"
                onClick={() => {
                  handleFetch(7 + index);
                }}
              >
                <span className="type">{code.type}</span>
                <CopyBlock
                  text={code.code}
                  language="typescript"
                  showLineNumbers={true}
                  theme={monoBlue}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Manga */}
      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <div className={`${styles.data} centered`}>
          <h1>Manga</h1>
          <p>You can get Manga data for your Manga realted projects!</p>

          <h2>Route</h2>
          <p>You can get high quality data for Manga.</p>
          {TrpcCode[5].map((code: any, index: number) => {
            return (
              <div
                className="trpcCode"
                key={index}
                title="Click on the route to see tRPC API in action"
                onClick={() => {
                  handleFetch(8 + index);
                }}
              >
                <span className="type">{code.type}</span>
                <CopyBlock
                  text={code.code}
                  language="typescript"
                  showLineNumbers={true}
                  theme={monoBlue}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* advantages */}
      <div className={`cloudyBgDiv ${styles.advsection}`}>
        <div className={styles.data}>
          <h1>Advantages</h1> <h2 className="tag">of tRPC</h2>
          <div className={styles.data}>
            <p>
              Type Safety: :{" "}
              <span>
                Ensures type safety in communication between server and client,
                reducing the likelihood of runtime errors.
              </span>
            </p>
            <p>
              Automatic TypeScript Generation :{" "}
              <span>
                Automatically generates TypeScript types on the client side
                based on the server-defined API, enhancing development
                efficiency.
              </span>
            </p>
            <p>
              Developer-Friendly :{" "}
              <span>
                Prioritizes developer ergonomics, making it easy to work with
                and understand, leading to faster development cycles.
              </span>
            </p>
            <p>
              Simplified Communication :{" "}
              <span>
                Simplifies API development by eliminating the need for manual
                type mappings and reducing boilerplate code.
              </span>
            </p>
            <p>
              Robustness :{" "}
              <span>
                Enhances robustness by enforcing a strict contract between the
                server and client, reducing the chances of miscommunications.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* disadvantages */}
      <div className={`cloudyBgDiv ${styles.advsection}`}>
        <div className={styles.data}>
          <h1>Disadvantages</h1>
          <h2 className="tag">of tRPC</h2>
          <div className={styles.data}>
            <p>
              Learning Curve:{" "}
              <span>
                As with any new technology, there might be a learning curve for
                developers unfamiliar with tRPC.
              </span>
            </p>
            <p>
              Limited Ecosystem:{" "}
              <span>
                {" "}
                Depending on the adoption rate, there might be a limited
                ecosystem and community support compared to more established
                frameworks.
              </span>
            </p>
            <p>
              Flexibility Trade-off:{" "}
              <span>
                While type safety is a significant advantage, it might limit the
                flexibility in certain scenarios where dynamic typing is
                preferred.
              </span>
            </p>
            <p>
              Potential Overhead:{" "}
              <span>
                Depending on the use case, the automatic generation of
                TypeScript types might introduce some overhead in terms of file
                size.
              </span>
            </p>
            <p>
              Potential Overhead:{" "}
              <span>
                As tRPC heavily relies on TypeScript, projects not using
                TypeScript might find it less suitable.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRPC;
