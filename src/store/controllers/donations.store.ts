import { db } from "@/utils/config/firebaseInit"
import { Donation } from  './../models/models'
import { collection, query, orderBy, getDocs, addDoc, Timestamp, limit } from "firebase/firestore";



class DonationController {
    private collectionRef = collection(db, "drives");
    public defLimit = 10;

    async fetchDonations(lmt= this.defLimit, start: Date = new Date(0), end: Date = new Date()): Promise<Donation[]> {
        //get all donations
        const q = query(
            this.collectionRef,
            orderBy('deadline', 'desc'),
            limit(lmt)
        );
        const querySnapshot = await getDocs(q);
        const donations: Donation[] = [];

        for (const doc of querySnapshot.docs) {
            const data = doc.data();
            if (data.deadline === null || (data.deadline >= start && data.deadline <= end)) {
                donations.push({ id: doc.id, ...data } as Donation);
            }
        }

        return donations;
    }

    async saveDonation(donation: Omit<Donation, 'id'>): Promise<string> {
        const docRef = await addDoc(this.collectionRef, {
            ...donation,
            deadline: donation.deadline ? Timestamp.fromDate(donation.deadline) : null,
            createdAt: Timestamp.now()
        });
        return docRef.id;
    }
}

const donations = new DonationController()
export default donations;