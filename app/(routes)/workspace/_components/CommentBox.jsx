"use client";
import { useThreads } from '@liveblocks/react';
import React from 'react';
import { Composer, Thread } from "@liveblocks/react-ui";

function CommentBox() {
  const { threads, error } = useThreads();

  if (error) {
    console.error("Error getting threads:", error);
    return <div>Error loading threads: {error.message}</div>;
  }

  return (
    <div className='w-[300px] h-[350px] shadow-lg rounded-lg overflow-auto z-30'>
      {threads?.length > 0 ? (
        threads.map((thread) => (
          <Thread key={thread.id} thread={thread} />
        ))
      ) : (
        <div>No comments yet.</div>
      )}
      
      <Composer className='z-10'>
        <Composer.Submit className="btn-primary" style={{ color: "#ffffff" }}>
          Reply
        </Composer.Submit>
      </Composer>
    </div>
  );
}

export default CommentBox;
