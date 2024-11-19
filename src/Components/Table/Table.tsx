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
        className="p-4 text-center text-sm font-medium text-textGreen4 font-bold uppercase tracking-wider"
        key={config.label}
      >
        {config.label}
      </th>
    );
  });

  return (
    <div className="bg-bgGray9 rounded-lg m-4 p-2 w-full flex justify-center item-center border-2 border-bgGray4">
      <table className="w-full divide-y divide-bgGray9">
        <thead className="text-green-400">
          {renderedHeaders}
        </thead>
        <tbody className="text-textGray4 text-sm">{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
