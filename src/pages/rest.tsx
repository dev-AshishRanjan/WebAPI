import React from 'react';
import styles from "@/styles/Rest.module.scss";
import { FaPlay } from "react-icons/fa";

const REST = () => {
  return (
    <div className={styles.restbody}>
      <div className={`cloudyBgDiv ${styles.herosection}`}>
        <div className={styles.data}>
          <h1>REST</h1>
          <p>REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless communication model, where each request from a client to a server contains all the information needed to understand and fulfill that request. RESTful systems use standard HTTP methods (GET, POST, PUT, DELETE) for communication and typically operate over the web. Resources, identified by URIs, are manipulated using these methods, and the architecture emphasizes simplicity, scalability, and a uniform interface for efficient and reliable communication between distributed systems.</p>
          <h2>Base Address</h2>
          <div className='route'>
            <div><span className='type'>BA</span> <span className='vip'>https://web-api-azure.vercel.app</span>  <span className='detail'>Base</span></div>
          </div>
        </div>
      </div>

      {/* CRUD */}
      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <div className={styles.data}>
          <h1>CRUD</h1>
          <p>Your can perform the basic CRUD operations on this route. It operates on the tables present on our mongoDB server.</p>

          <h2>Schema</h2>
          <p>As stored in MongoDB. Here "_id" and "__v" are the fields which are filled by mongoDB itself</p>
          <div className='schema'>
            <p>ID : <span>Number</span></p>
            <p>Name : <span>String</span></p>
            <p>Github : <span>String</span></p>
            <p>_id : <span>Number</span></p>
            <p>__v : <span>String</span></p>
          </div>
          <h2>Routes</h2>
          <div className='route'>
            <div><span className='type'>GET</span> <span className='vip'>/api/rest/crud</span>  <span className='detail'>Get all users</span><span className='play'><FaPlay/></span></div>
          </div>
          <div className='route'>
            <div><span className='type'>POST</span> <span className='vip'>/api/rest/crud</span>  <span className='detail'>Create an user</span><span className='play'><FaPlay/></span></div>
          </div>
          <div className='route'>
            <div><span className='type'>PUT</span> <span className='vip'>/api/rest/crud</span>  <span className='detail'>Update an user using _id</span><span className='play'><FaPlay/></span></div>
          </div>
          <div className='route'>
            <div><span className='type'>DELETE</span> <span className='vip'>/api/rest/crud</span>  <span className='detail'>Delete an user using _id</span><span className='play'><FaPlay/></span></div>
          </div>
        </div>
      </div>

      {/* NEWS */}
      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <div className={styles.data}>
          <h1>NEWS</h1>
          <p>You can get 2 types of news on the same route using query params used in REST APIs</p>

          <h2>Unfiltered News</h2>
          <p>You can get high amount of NEWS, which are not filtered based on the fields related</p>
          <div className='route'>
            <div><span className='type'>GET</span> <span className='vip'>/api/rest/news</span>  <span className='detail'>Get all news</span><span className='play'><FaPlay/></span></div>
          </div>
          <h2>Filtered News</h2>
          <p>You can get hundred of NEWS, which are filtered based on the fields related</p>
          <div className='route'>
            <div><span className='type'>GET</span> <span className='vip'>/api/rest/news?type=general</span>  <span className='detail'>Get all filtered news</span><span className='play'><FaPlay/></span></div>
          </div>
          Parameters given to "type" query : 
          <div className='schema'>
            <p>1.  <span>general</span></p>
            <p>2.  <span>entertainment</span></p>
            <p>3.  <span>business</span></p>
            <p>4.  <span>health</span></p>
            <p>5.  <span>science</span></p>
            <p>6.  <span>sports</span></p>
            <p>7.  <span>technology</span></p>
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
          <div className='route'>
            <div><span className='type'>GET</span> <span className='vip'>/api/rest/movie</span>  <span className='detail'>Get all movies</span><span className='play'><FaPlay/></span></div>
          </div>
        </div>
      </div>

      {/* Anime */}
      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <div className={`${styles.data} centered`}>
          <h1>Anime</h1>
          <p>You can get Anime data for your Anime realted projects!</p>

          <h2>Route</h2>
          <p>You can get high quality data for Animes.</p>
          <div className='route'>
            <div><span className='type'>GET</span> <span className='vip'>/api/rest/anime</span>  <span className='detail'>Get all anime</span><span className='play'><FaPlay/></span></div>
          </div>
        </div>
      </div>

      {/* Manga */}
      <div className={`cloudyBgDiv ${styles.routesection}`}>
        <div className={`${styles.data} centered`}>
          <h1>Manga</h1>
          <p>You can get Manga data for your Manga realted projects!</p>

          <h2>Route</h2>
          <p>You can get high quality data for Manga.</p>
          <div className='route'>
            <div><span className='type'>GET</span> <span className='vip'>/api/rest/manga</span>  <span className='detail'>Get all manga</span><span className='play'><FaPlay/></span></div>
          </div>
        </div>
      </div>

      {/* advantages */}
      <div className={`cloudyBgDiv ${styles.advsection}`}>
        <div className={styles.data}>
          <h1>Advantages</h1> <h2 className='tag'>of REST</h2>
          <div className={styles.data}>
            <p>Simplicity : <span>REST follows a straightforward and easy-to-understand design, making it simple to implement and use.</span></p>
            <p>Scalability : <span>Stateless nature allows for easy scalability, as each request from a client to a server is independent.</span></p>
            <p>Flexibility : <span>Supports multiple data formats, including JSON and XML, providing flexibility in data representation.</span></p>
            <p>Compatibility : <span>Works well with various technologies and can be easily integrated into existing systems.</span></p>
            <p>Caching : <span>Utilizes caching mechanisms for improved performance by reducing server load and latency.</span></p>
          </div>
        </div>
      </div>
      {/* disadvantages */}
      <div className={`cloudyBgDiv ${styles.advsection}`}>
        <div className={styles.data}>
          <h1>Disadvantages</h1><h2 className='tag'>of REST</h2>
          <div className={styles.data}>
            <p>Limited functionality: <span>REST has limited support for real-time communication and lacks built-in features for complex operations.</span></p>
            <p>Over-fetching and under-fetching: <span>Clients may receive more or less data than needed, leading to inefficiencies in data transfer.</span></p>
            <p>Security: <span>While REST supports HTTPS for secure communication, additional security measures may be needed for certain applications.</span></p>
            <p>Versioning: <span>Handling API versioning can be challenging, especially when changes are introduced.</span></p>
            <p>Statelessness: <span>While statelessness is an advantage for scalability, it may require additional effort to manage state in certain applications.</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default REST