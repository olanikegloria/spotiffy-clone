import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'a018ef236dmshdee85e2adbcdef9p1e359djsn1b163cdcb0dc',
//       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
      reducerPath: 'shazamCoreApi',
      baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-api7.p.rapidapi.com',
        prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key','a018ef236dmshdee85e2adbcdef9p1e359djsn1b163cdcb0dc')
          return headers;
        },
      }),
      endpoints: (builder) => ({
        getTopCharts: builder.query({query : () =>
           '/charts/get-top-songs-in-world?limit=50' }),
      }),
    });

    export const {
      useGetTopChartsQuery,
    } = shazamCoreApi;