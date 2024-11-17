import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

type Props = {
  symbol: string;
  handleComment: (e: CommentFormInputs) => void;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const validation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
});

const StockCommentForm = ({ symbol, handleComment }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormInputs>({ resolver: yupResolver(validation) });

  return (
    <form className="m-4 bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit(handleComment)}>
      <input
        type="text"
        id="title"
        className="mb-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-gray-400"
        placeholder="Title"
        {...register("title")}
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      
      <div className="mb-4">
        <textarea
          id="comment"
          rows={6}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-gray-400"
          placeholder="Write a comment..."
          {...register("content")}
        ></textarea>
        {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
      </div>
      
      <button
        type="submit"
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-blue-300 hover:bg-green-600"
      >
        Post comment
      </button>
    </form>
  );
};

export default StockCommentForm;
