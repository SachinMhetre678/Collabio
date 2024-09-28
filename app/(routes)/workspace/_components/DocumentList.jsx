"use client"; // Ensure the component runs on the client side only

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import DocumentOptions from './DocumentOptions';
import { toast } from 'sonner'; 

function DocumentList({ documentList, params }) {
  const router = useRouter();

  const deleteDocumentFromState = (docId) => {
    // Here, you can implement logic to remove the document from the state or trigger a refetch.
    toast('Document Deleted!');
  };

  return (
    <div>
      {documentList.map((documentData, index) => (
        <div
          key={index}
          onClick={() => router.push('/workspace/' + params?.workspaceid + "/" + documentData?.id)}
          className={`mt-3 p-2 px-3 hover:bg-gray-200 
          rounded-lg cursor-pointer flex justify-between items-center
          ${documentData?.id == params?.documentid && 'bg-white'}`}
        >
          <div className='flex gap-2 items-center'>
            {!documentData.emoji && <Image src={'/loopdocument.svg'} width={20} height={20} alt="document-icon" />}
            <h2 className='flex gap-2'> {documentData?.emoji} {documentData.documentName}</h2>
          </div>
          <DocumentOptions documentData={documentData} deleteDocument={deleteDocumentFromState} />
        </div>
      ))}
    </div>
  );
}

export default DocumentList;
