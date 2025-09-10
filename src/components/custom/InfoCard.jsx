import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function InfoCard({ title, children }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
