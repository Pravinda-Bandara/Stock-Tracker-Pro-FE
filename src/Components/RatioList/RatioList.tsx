type Props = {
  config: any;
  data: any;
};

const RatioList = ({ config, data }: Props) => {
  const renderedCells = config.map((row: any) => {
    return (
      <li className="py-6 sm:py-6 bg-bgGray9">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-md font-medium text-textGreen4 font-bold truncate">
              {row.label}
            </p>
            <p className="text-sm text-textGray4 truncate">
              <a
                href="/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="17727a767e7b57607e7973646372653974787a"
              >
                {row.subTitle && row.subTitle}
              </a>
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-textGreen4">
            {row.render(data)}
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="bg-bgGray9 rounded-lg m-4 mb-4 p-4 sm:p-6 w-full">
      <ul className="divide-y divide-gray-200">{renderedCells}</ul>
    </div>
  );
};

export default RatioList;
