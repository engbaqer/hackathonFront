import { Button } from "@/components/ui/button"

export default function ActionButton({ children, onClick, variant = "default" }) {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  )
}
