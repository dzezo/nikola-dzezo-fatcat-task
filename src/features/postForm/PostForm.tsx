import clsx from 'clsx';
import { z, ZodType } from 'zod';

import { Button } from '@homework-task/components/Button';
import { CreateForm } from '@homework-task/components/CreateForm';
import { InputField } from '@homework-task/components/InputField';
import { TextField } from '@homework-task/components/TextField';
import { useCreatePostMutation } from '@homework-task/features/postForm/hooks/useCreatePostMutation';

type PostFormState = {
    title: string;
    body: string;
};

const postFormSchema: ZodType<PostFormState> = z.object({
    title: z
        .string()
        .min(1, { message: 'Title is required' })
        .max(20, { message: 'Title is too long' }),
    body: z
        .string()
        .min(1, { message: 'Body is required' })
        .max(100, { message: 'Body is too long' }),
});

export const PostForm = () => {
    return (
        <CreateForm<PostFormState>
            useMutation={useCreatePostMutation}
            validationSchema={postFormSchema}
            successMessage={'Post created successfully!'}
            renderForm={({ register, errors }) => (
                <div className={clsx('flex', 'flex-col', 'gap-2')}>
                    <InputField
                        placeholder={'Title'}
                        error={errors.title?.message}
                        {...register('title')}
                    />
                    <TextField
                        placeholder={'Body'}
                        error={errors.body?.message}
                        {...register('body')}
                    />
                    <Button type={'submit'}>Submit</Button>
                </div>
            )}
        />
    );
};
