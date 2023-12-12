import React from "react";
import styles from "../styles/Home.module.scss";
import Card from "@/components/Card";

const Index = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.hero}>
        <div className={styles.lefthalf}>
          <h1>Web API</h1>
          <h2 className={styles.tag}>stop for</h2>
          <h2 className={styles.tag}>all apis</h2>
        </div>
        <div className={styles.righthalf}>
          <div>
            <h1>Available APIs : </h1>
          </div>
          <div>
            <h2 className={styles.tag}>CRUD</h2>
            <h2 className={styles.tag}>Movie</h2>
            <h2 className={styles.tag}>News</h2>
            <h2 className={styles.tag}>Anime</h2>
            <h2 className={styles.tag}>Manga</h2>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <Card
          cardtype="card1"
          route="/rest"
          name="REST"
          details="Stateless architecture for flexible web services, simplifying communication in distributed systems."
        />
        <Card
          cardtype="card2"
          route="/graphql"
          name="GraphQL"
          details="Precise data queries, fetching exactly what's needed, streamlining API interactions with elegance."
        />
        <Card
          cardtype="card3"
          route="/trpc"
          name="tRPC"
          details="Seamless communication with type safety, ensuring server-client harmony in a robust and developer-friendly manner."
        />
        <Card
          cardtype="card4"
          route="/grpc"
          name="gRPC"
          details="High-performance, cross-language RPC, leveraging protocol buffers for efficient and reliable remote procedure calls in distributed systems."
        />
      </div>
    </div>
  );
};

export default Index;
