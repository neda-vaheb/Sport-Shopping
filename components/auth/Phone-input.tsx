import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface PhoneInputProps {
  phone: string;
  countryCode: string;
  onphoneChange: (value: string) => void;
  onCountryCodeChange: (value: string) => void;
  error?: string;
}
export const PhoneInput: React.FC<PhoneInputProps> = ({
  phone,
  countryCode,
  onphoneChange,
  onCountryCodeChange,
  error,
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="phone">Phone Number</Label>
      <div className="flex gap-2">
        <Select value={countryCode} onValueChange={onCountryCodeChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="+98">🇮🇷 +98</SelectItem>
            <SelectItem value="+44">🇬🇧 +44</SelectItem>
            <SelectItem value="+49">🇩🇪 +49</SelectItem>
            <SelectItem value="+1">🇺🇸 +1</SelectItem>
            <SelectItem value="+33">🇫🇷 +33</SelectItem>
            <SelectItem value="+90">🇹🇷 +90</SelectItem>
          </SelectContent>
        </Select>
        <Input
          id="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tell"
          placeholder="912 998 9934"
          value={phone}
          onChange={(event) => event.target.value.replace(/\D/g, "")}
          aria-invalid={!!error}
          className="h-10"
        />
      </div>
      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
