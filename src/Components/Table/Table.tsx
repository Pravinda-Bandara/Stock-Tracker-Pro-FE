type Props = {
  config: any;
  data: any;
};

const Table = ({ config, data }: Props) => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr key={company.cik}>
        {config.map((val: any) => {
          return (
            <td className="p-3 text-center">
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });

  const renderedHeaders = config.map((config: any) => {
    return (
      <th
        className="p-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
        key={config.label}
      >
        {config.label}
      </th>
    );
  });

  return (
    <div className="bg-white shadow rounded-lg m-4 p-2 w-full flex justify-center item-center">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr>{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
