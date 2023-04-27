import React from 'react';
import Head from '../../Helper/Head';
import useFetch from '../../../Hooks/useFetch';
import { useEffect } from 'react';
import { STATS_GET } from '../../../Api/index.js';
import Loading from '../../Helper/Loading';
import Error from '../../Helper/Error';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      const { response, json } = await request(url, options);
      console.log(json);
    };
    getData();
  }, [request]);
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<></>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
