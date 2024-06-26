import { useMutation } from '@tanstack/react-query';

import { createPost } from '@homework-task/features/postForm/requests/createPost';

export const useCreatePostMutation = () => {
    return useMutation({
        mutationFn: createPost,
    });
};
