export interface Image {
    url: string;
    alt?: string;
}

export interface Donation {
    id?: string;
    title: string;
    description: string;
    goal: number;
    current: number;
    images: Image[];
    driveId: string | null;
    deadline: Date | null;
}

export interface Drive {
    id?: string;
    title: string;
    description: string;
    goal: number;
    current: number;
    images: Image[];
    donationId: string | null;
    deadline: Date;
}

export interface Ticket {
    id?: string;
    name: string;
    email: string;
    message: string;
}

export interface Volunteer {
    id?: string;
    name: string;
    email: string;
}