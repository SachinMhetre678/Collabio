"use client"; // This line must be at the very top

import React, { useState } from 'react';
import DocumentHeader from './DocumentHeader'; // Ensure correct
import DocumentInfo from './DocumentInfo';     // Ensure correct
import RichDocumentEditor from './RichDocumentEditor'; // Ensure correct
import CommentBox from './CommentBox';           // Ensure correct
import { Button } from '../../../../components/ui/button'; // Check path
import { X, MessageCircle } from 'lucide-react'; // Check imports

function DocumentEditiorSection({ params }) {
  const [openComment, setOpenComment] = useState(false);
  console.log('Rendering DocumentEditiorSection');

  return (
    <div className='relative'>
      <DocumentHeader />
      <DocumentInfo params={params} />
      <RichDocumentEditor params={params} />

      <div className='fixed right-10 bottom-10'>
        <Button><MessageCircle/></Button>
      </div>

      <div className='fixed right-10 bottom-10'>
        <Button onClick={() => setOpenComment(!openComment)}>
          {openComment ? <X /> : <MessageCircle />}
        </Button>
        {openComment && <CommentBox />}
      </div>
    </div>
  );
}

export default DocumentEditiorSection;
