"use client"; // Ensure the component runs on the client side only

import { Link2Icon, MoreVertical, PenBox, Trash2 } from 'lucide-react';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../config/firebaseConfig';
import { toast } from 'sonner';

function DocumentOptions({ documentData, deleteDocument }) {
  
  const handleRename = async () => {
    // Check if window is defined (if this causes issues)
    if (typeof window !== 'undefined') {
      const newName = prompt("Enter new name for the document:", documentData.documentName);
      if (newName && newName.trim() !== "") {
        try {
          const documentRef = doc(db, "workspaceDocuments", documentData.id); // Ensure this path is correct
          await updateDoc(documentRef, { documentName: newName }); // Update document name in Firestore
          toast('Document renamed successfully.');
        } catch (error) {
          console.error("Error renaming document: ", error);
          toast.error("Error renaming document: " + error.message); // Display the error message
        }
      } else {
        toast.error("Document name cannot be empty.");
      }
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical className='h-4 w-4' />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex gap-2" onClick={handleRename}>
            <PenBox className='h-4 w-4' /> Rename
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2">
            <Link2Icon className='h-4 w-4' /> Share Link
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => deleteDocument(documentData?.id)} 
            className="flex gap-2 text-red-500">
            <Trash2 className='h-4 w-4' /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DocumentOptions;
