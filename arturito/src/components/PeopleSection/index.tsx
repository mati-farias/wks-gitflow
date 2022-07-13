import useSWR from 'swr';

import { pplGet } from '../../utils/fetcher';
import Table from '../Table';

/* <p>
              Agregar tabla con los personajes sacados de la API. Mostrar para
              cada persona: name, birth_year, height (en metros), cantidad de
              films. Codear en un componente aparte tal como {'<Planets>'}.
            </p> */

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Birth year',
    dataIndex: 'birth_year',
    key: 'birth_year',
  },
  {
    title: 'Height',
    dataIndex: 'height',
    key: 'height',
    render: (height: string) => parseInt(height) / 100 + 'm',
  },
  {
    title: 'Films',
    dataIndex: 'films',
    key: 'films',
    render: (films: string[]) => films.length,
  },
];

const People = () => {
  const { data, error } = useSWR('/people', pplGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results} />
    </div>
  );
};

export default People;
