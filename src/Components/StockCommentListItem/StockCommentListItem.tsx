import React from "react";
import { CommentGet } from "../../Models/Comment";

type Props = {
  comment: CommentGet;
};

const StockCommentListItem = ({ comment }: Props) => {
  console.log(comment)
  return (
    <div className="relative grid grid-cols-1 gap-4 border rounded-lg bg-bgGray6 mx-4 p-6 rounded-lg my-2">
      <div className="relative flex gap-4 w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-xl text-textGreen4 whitespace-nowrap truncate overflow-hidden">
              {comment.title}
            </p>
          </div>
          <p className="text-dark text-sm text-textGreen4">{comment.createdBy}</p>
        </div>
      </div>
      <p className="-mt-4 text-gray-500 text-textGray4">{comment.content}</p>
    </div>
  );
};

export default StockCommentListItem;
