import { useState, useEffect } from "react";

const baseUrl =
  "https://api.unsplash.com/photos/random?query=mens%fashion&client_id=xBznWZ7Lr83Rj0-FpG2-A5fYDhPvE1vxNxHSb8xIKKw"; // If all of them go to something like https://www.omdb.api this would go there

export default function useFetch() {
  async function callAPI(url, body = null) {
    let opts = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (body) {
      opts = { ...opts, body: JSON.stringify(body) };
    }
    try {
      const response = await fetch(url, opts);
      if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        throw response;
      }
    } catch (err) {
      return { error: "Something went wrong, please try again later..." };
    }
  }
  // !Old useFetch code will not work with backend implementation.
  // This hook uses state management AND hooks
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setError(null);
  //   setData(null);
  //   async function callAPI() {
  //     setLoading(true);
  //     // This is with fetch, but it could just as easily be with axios
  //     try {
  //       const response = await fetch(baseUrl);
  //       if (response.ok) {
  //         const json = await response.json();

  //         setData(json);
  //       } else {
  //         throw response;
  //       }
  //     } catch (e) {
  //       // console.log(e);
  //       setError("Something went wrong. Please try again later");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   callAPI();
  // }, []);

  // Exposes the data, any error, and whether or not it was loading
  return { callAPI };
}
