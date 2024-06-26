import { FormEvent, ReactNode } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import {
    FieldErrors,
    FieldValues,
    UseFormRegister,
    useForm,
} from 'react-hook-form';
import { ZodType } from 'zod';

type Props<TFormState extends FieldValues> = {
    useMutation: () => {
        mutate: (
            data: TFormState,
            options?: {
                onSuccess?: () => void;
                onError?: () => void;
                onSettled?: () => void;
            }
        ) => void;
        isPending: boolean;
        isError: boolean;
    };
    validationSchema: ZodType<TFormState>;
    successMessage: string;
    renderForm: (props: {
        register: UseFormRegister<TFormState>;
        errors: FieldErrors<TFormState>;
    }) => ReactNode;
};

export const CreateForm = <TFormState extends FieldValues>({
    useMutation,
    validationSchema,
    successMessage,
    renderForm,
}: Props<TFormState>) => {
    const mutation = useMutation();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<TFormState>({
        resolver: zodResolver(validationSchema),
    });

    const handleFormData = (data: TFormState) => {
        mutation.mutate(data, {
            onSuccess: () => alert(successMessage),
        });
    };
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        void handleSubmit(handleFormData)(event);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <fieldset disabled={mutation.isPending}>
                {renderForm({ register, errors })}
            </fieldset>
        </form>
    );
};
