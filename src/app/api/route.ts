import { NextRequest, NextResponse } from 'next/server';
import admin from '../../../lib/firebaseConfig';

interface DataArrayWhatsappList {
    id: number,
    nome: string,
    telefone: string,
    next_in_queue: boolean;
    created_at: Date
}

// http://localhost:3000/api/

export async function GET(request: NextRequest) {

    const firebase = admin.firestore();
    const whatsappRef = firebase.collection('whatsapps');

    const returnWhatsapps = await whatsappRef.get();

    const dataArray: DataArrayWhatsappList[] = [];

    returnWhatsapps.forEach(whatsapp => {
        const data = whatsapp.data();
        dataArray.push(data as DataArrayWhatsappList)
    })

    const lengthArray = dataArray.length;

    const userInQueue = dataArray.find(user => user.next_in_queue == true);

    const currentUserRef = whatsappRef.doc(`${userInQueue!.id}`);
    await currentUserRef.update({next_in_queue: false});

    const nextInQueue = userInQueue!.id + 1;

    if (nextInQueue > lengthArray) {
        const nextUserRef = whatsappRef.doc("1");
        await nextUserRef.update({ next_in_queue: true });
    } else {
        const nextUserRef = whatsappRef.doc(`${nextInQueue}`);
        await nextUserRef.update({ next_in_queue: true });
    }

    const logsRef = firebase.collection('logs');

    const date = new Date();
    const id = date.getTime();
    const date_now = date.toISOString();

    const newLog = {
        id,
        telefone: userInQueue!.telefone,
        nome: userInQueue!.nome,
        created_at: date_now
    };

    await logsRef.doc(String(id)).set(newLog);

    return NextResponse.json({ number: userInQueue?.telefone })
}