import React from "react";
import { CommentGet } from "../../Models/Comment";
import StockCommentListItem from "../StockCommentListItem/StockCommentListItem";

type Props = {
  comments: CommentGet[];
};

const StockCommentList = ({ comments }: Props) => {
  return (
    <div className=" m-4 bg-white rounded-lg pb-6">
      {/* Section Title */}
      <h1 className="text-xl font-bold text-gray-800 px-4 pt-6 pb-4">Comments</h1>
      {/* Comments List */}
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <StockCommentListItem comment={comment} />
        ))
      ) : (
        <p className="text-gray-500 text-center">No comments available.</p>
      )}
    </div>
  );
};

export default StockCommentList;
