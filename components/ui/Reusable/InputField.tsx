import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/Textarea";

interface InputFieldProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> {
  name: string;
  label: string;
  isTextArea?: boolean;
}

export const InputField = ({
  name,
  label,
  isTextArea = false,
  ...props
}: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // 👈 گرفتن متدهای فرم از контекست بدون پاس دادن پروپ‌های تکراری

  const error = errors[name];

  return (
    <div className="space-y-2 w-full">
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>

      {isTextArea ? (
        <Textarea
          id={name}
          {...register(name)}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={`bg-background/50 resize-none focus-visible:ring-1 ${
            error ? "border-destructive focus-visible:ring-destructive" : ""
          }`}
        />
      ) : (
        <Input
          id={name}
          {...register(name)}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          className={`bg-background/50 h-11 focus-visible:ring-1 ${
            error ? "border-destructive focus-visible:ring-destructive" : ""
          }`}
        />
      )}

      {/* نمایش ارور با انیمیشن یا متن ظریف مینیمال */}
      {error && (
        <p className="text-xs font-medium text-destructive mt-1">
          {error.message?.toString()}
        </p>
      )}
    </div>
  );
};
