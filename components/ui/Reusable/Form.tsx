// components/ui/Form/index.tsx
import React from "react";
import { 
  useForm, 
  UseFormReturn, 
  SubmitHandler, 
  UseFormProps, 
  FieldValues,
  FormProvider,
  Resolver
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// تعریف دقیق اینترفیس کامپوننت با متدهای تایپ‌اسکریپت
interface FormProps<TFormValues extends FieldValues> {
  schema: unknown;
  onSubmit: SubmitHandler<TFormValues>;
  // استفاده از فرم رندر پراپ (Render Prop) برای فرستادن متدها به فرزندان
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  className?: string;
}

export function Form<TFormValues extends FieldValues = FieldValues>({
  schema,
  onSubmit,
  children,
  options,
  className,
}: FormProps<TFormValues>) {
  
  // فعال‌سازی react-hook-form به همراه رزولور zod
  const methods = useForm<TFormValues>({
    ...options,
    resolver: zodResolver(schema as unknown as Parameters<typeof zodResolver>[0]) as unknown as Resolver<TFormValues>,
  });

  return (
    <FormProvider {...methods}>
      <form 
        onSubmit={methods.handleSubmit(onSubmit)} 
        className={className}
        noValidate // غیرفعال کردن ولیدیشن خودکار مرورگر برای جایگزینی با Zod
      >
        {children(methods)}
      </form>
    </FormProvider>
  );
}