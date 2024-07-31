import { db } from "@/utils/config/firebaseInit"
import { Drive } from  './../models/models'
import { collection, query, getDocs, where, addDoc, Timestamp, limit, orderBy } from "firebase/firestore";




class DriveController {
    private collectionRef = collection(db, "drives");
    public defaultLimit = 10;

    async fetchDrives(lmt=this.defaultLimit, start: Date = new Date(0), end: Date = new Date()): Promise<Drive[]> {
        const q = query(
            this.collectionRef,
            limit(lmt),
            orderBy('deadline', 'desc'),
            where("deadline", ">=", Timestamp.fromDate(start)),
            where("deadline", "<=", Timestamp.fromDate(end)),
        );

        const querySnapshot = await getDocs(q);
        const drives: Drive[] = [];

        for (const doc of querySnapshot.docs) {
            const data = doc.data();
            drives.push({ id: doc.id, ...data } as Drive);
        }

        return drives;
    }

    async saveDrive(drive: Omit<Drive, 'id'>): Promise<string> {
        // Ensure deadline is a Date object
        const deadline = drive.deadline instanceof Date ? drive.deadline : new Date(drive.deadline);

        const driveData = {
            ...drive,
            deadline: Timestamp.fromDate(deadline),
            createdAt: Timestamp.now()
        };

        const docRef = await addDoc(this.collectionRef, driveData);
        return docRef.id;
    }
}

const drives = new DriveController()
export default drives

