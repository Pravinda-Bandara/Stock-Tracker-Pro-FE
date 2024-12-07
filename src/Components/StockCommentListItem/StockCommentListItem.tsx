import React from "react";
import { CommentGet } from "../../Models/Comment";
import { format } from "date-fns";

type Props = {
  comment: CommentGet;
};

const StockCommentListItem = ({ comment }: Props) => {
  // Format the date
  const formattedDate = format(new Date(comment.createOn), "yyyy-MM-dd hh:mm a");

  return (
    <div className="relative border rounded-lg bg-gray-100 mx-auto p-4 my-2 ml-6">
      {/* Title */}
      <h2 className="text-lg font-semibold text-green-600">{comment.title}</h2>
      
      {/* User and Date */}
      <div className="flex justify-start items-center mt-1">
        <p className="text-sm text-green-500 font-bold">{comment.appUser} :</p>
        <span className="text-sm text-gray-500 px-2">{formattedDate}</span>
      </div>

      {/* Content */}
      <p className="mt-1 text-gray-700 text-sm">{comment.content}</p>
    </div>
  );
};

export default StockCommentListItem;
