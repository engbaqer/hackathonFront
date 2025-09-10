import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputField({ label, value, onChange, type = "text", placeholder }) {
  return (
    <div className="grid gap-1.5">
      {label && <Label>{label}</Label>}
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
