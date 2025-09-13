import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import chackFing from "../imges/ceckFingur.jpg"

export default function FingerprintCaptureCard({ showInterFinger, setShowInterFinger }) {
    return (
        <Card className="w-full max-w-sm shadow-lg">
            <CardHeader className="flex flex-col items-center">
                <img
                    src={chackFing}
                    alt="Fingerprint"
                    className="w-24 h-24 mb-4"
                />
                <CardTitle className="text-center text-lg">
                    Place Your Finger
                </CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-center text-gray-600">
                    Please place your finger on the sensor.
                    Follow the instructions on screen.
                </p>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
                <Button className="w-full bg-primary hover:bg-primary/80">
                    Next
                </Button>
                <Button variant="outline" className="w-full">
                    Try Again
                </Button>
                <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => setShowInterFinger(false)} // ✅ CLOSE MODAL
                >
                    Done
                </Button>
            </CardFooter>
        </Card>
    )
}
