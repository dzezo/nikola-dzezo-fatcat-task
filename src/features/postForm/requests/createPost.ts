type Params = {
    title: string;
    body: string;
};

export const createPost = async ({ title, body }: Params) => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                userId: 1,
                title,
                body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!res.ok) {
            throw new Error();
        }

        return res.json();
    } catch (error) {
        throw new Error();
    }
};
