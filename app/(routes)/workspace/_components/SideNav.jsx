"use client"

import { collection, doc, onSnapshot, query, setDoc, where } from 'firebase/firestore'
import { Bell, Loader2Icon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import DocumentList from './DocumentList'
import NotificationBox from './NotificationBox'
import { v4 as uuidv4 } from 'uuid' // Corrected import
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Logo from '../../../_components/Logo'
import { Button } from '../../../../components/ui/button'
import { db } from '../../../../config/firebaseConfig'
import { Progress } from '../../../../components/ui/progress'

const MAX_FILE = process.env.NEXT_PUBLIC_MAX_FILE_COUNT;

function SideNav({ params }) {
    const [documentList, setDocumentList] = useState([]);
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        params && GetDocumentList();
    }, [params]);

    /**
     * Used to get Document List
     */
    const GetDocumentList = () => {
        const q = query(collection(db, 'workspaceDocuments'),
            where('workspaceId', '==', Number(params?.workspaceid))
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setDocumentList([]);

            querySnapshot.forEach((doc) => {
                setDocumentList((documentList) => [...documentList, doc.data()]);
            });
        });
    };

    /**
     * Create New Document
     */
    const CreateNewDocument = async () => {
        if (documentList?.length >= MAX_FILE) {
            toast("Upgrade to add new file", {
                description: "You reached the max file limit. Please upgrade for unlimited file creation.",
                action: {
                    label: "Upgrade",
                    onClick: () => console.log("Undo"),
                },
            });
            return;
        }

        setLoading(true);
        const docId = uuidv4(); // Use uuidv4 instead of uuid4
        await setDoc(doc(db, 'workspaceDocuments', docId.toString()), {
            workspaceId: Number(params?.workspaceid),
            createdBy: user?.primaryEmailAddress?.emailAddress,
            coverImage: null,
            emoji: null,
            id: docId,
            documentName: 'Untitled Document',
            documentOutput: []
        });

        await setDoc(doc(db, 'documentOutput', docId.toString()), {
            docId: docId,
            output: []
        });

        setLoading(false);
        router.replace('/workspace/' + params?.workspaceid + "/" + docId);
    };

    return (
        <div className='h-screen md:w-72 hidden md:block fixed bg-blue-50 p-5 shadow-md'>
            <div className='flex justify-between items-center'>
                <Logo />
                <NotificationBox>
                    <Bell className='h-5 w-5 text-gray-500' />
                </NotificationBox>  
                
            </div>
            <hr className='my-5'></hr>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='font-medium'>Workspace Name</h2>
                    <Button size="sm" className="text-lg" onClick={CreateNewDocument}>
                        {loading ? <Loader2Icon className='h-4 w-4 animate-spin' /> : '+'}
                    </Button>
                </div>
            </div>

            {/* Document List  */}
            <DocumentList documentList={documentList} params={params} />

            {/* Progress Bar  */}
            <div className='absolute bottom-10 w-[85%]'>
                <Progress value={(documentList?.length / MAX_FILE) * 100} />
                <h2 className='text-sm font-light my-2'><strong>{documentList?.length}</strong> Out of <strong>{MAX_FILE}</strong> files used</h2>
                <h2 className='text-sm font-light '>Upgrade your plan for unlimited access</h2>
            </div>
        </div>
    );
}

export default SideNav;
