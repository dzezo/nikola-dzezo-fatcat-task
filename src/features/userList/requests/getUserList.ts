export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

export const getUserList = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!res.ok) {
            throw new Error();
        }

        return res.json() as Promise<User[]>;
    } catch (error) {
        throw new Error();
    }
};
