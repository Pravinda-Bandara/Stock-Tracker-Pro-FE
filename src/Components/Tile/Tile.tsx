import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

const Tile = ({ title, subTitle }: Props) => {
  return (
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0">
        <div className="flex-auto p-4 min-h-[130px] min-w-[250px]"> {/* Added min-h and min-w */}
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs min-h-10">
                {title}
              </h5>
              <span className="font-bold text-xl">{subTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
