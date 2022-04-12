import moment from "moment";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, updateComment } from "../commentSlice";

const Comment = ({
  _id,
  user: commentUser,
  name,
  ticket: ticketId,
  text,
  createdAt,
  updatedAt,
}) => {
  const [editEnable, setEditEnable] = useState(false);
  const [editText, setEditText] = useState("");

  const inputRef = useRef(null);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onEditEnable = () => {
    setEditEnable(true);
    setEditText(text);

    setTimeout(() => {
      inputRef.current.focus();
    }, 50);
  };

  const onEditCancel = () => {
    setEditEnable(false);
    setEditText(text);
  };

  const onDelete = () => {
    dispatch(
      deleteComment({
        ticketId: ticketId,
        commentId: _id,
      })
    );
  };

  const onUpdate = () => {
    dispatch(
      updateComment({
        ticketId: ticketId,
        commentId: _id,
        commentText: editText,
      })
    );
    setEditEnable(false);
  };

  return (
    <div className='flex space-x-2 w-full'>
      <div className='h-9 w-9'>
        <span className='h-9 w-9 rounded-full flex items-center justify-center bg-nice-orange font-semibold text-base'>
          {name?.charAt(0)}
        </span>
      </div>
      <div className='flex flex-col space-y-2 w-full'>
        <div className='flex text-xs'>
          <p className='text-xs font-semibold'>{name}</p>
          <span className='ml-3 text-gray-text'>
            {createdAt === updatedAt ? (
              <span>{moment(createdAt).startOf("hour").fromNow()}</span>
            ) : (
              <>
                <span className='mr-1.5 italic text-gray-text'>edited</span>
                <span className='text-gray-text'>
                  {moment(updatedAt).startOf("hour").fromNow()}
                </span>
              </>
            )}
          </span>
        </div>

        <input
          ref={inputRef}
          className={`w-full bg-transparent rounded-md mb-3 text-sm focus:outline-1 outline-deep-blue ${
            editEnable ? "border px-2 py-4" : ""
          }`}
          type='text'
          value={editEnable ? editText : text}
          disabled={!editEnable}
          onChange={(e) => setEditText(e.target.value)}
        />

        <div>
          {commentUser === user._id ? (
            <div className='flex space-x-1 items-center'>
              {editEnable ? (
                <>
                  <button
                    onClick={onUpdate}
                    className='bg-deep-blue text-white py-1 px-2 rounded-md hover:bg-light-blue transition-all duration-100 text-sm mt-0.5'
                  >
                    Save
                  </button>
                  <button
                    onClick={onEditCancel}
                    className='hover:bg-gray-200 text-gray-text py-1 px-2 rounded-md transition-all duration-100 text-sm mt-0.5'
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={onEditEnable}
                    className='text-gray-text py-2 rounded-md hover:underline hover:text-gray-text/75 transition-all duration-100 text-xs font-semibold'
                  >
                    Edit
                  </button>
                  <span className='text-xs text-gray-text'>•</span>
                  <button
                    onClick={onDelete}
                    className='text-gray-text py-2 rounded-md hover:underline hover:text-gray-text/75 transition-all duration-100 text-xs font-semibold'
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Comment;
