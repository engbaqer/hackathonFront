import { useState } from "react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import SuccessAlert from "../components/custom/checkAlart"
import ErrorAlert from "./../components/custom/incorrectComponnent"
import chackFing from "../imges/ceckFingur.jpg"

export default function MatchFingerprint() {
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    const handleFingerprintCheck = (isMatch) => {
        if (isMatch) {
            setShowSuccess(true)
        } else {
            setShowError(true)
        }
    }

    return (
        <div className="relative flex flex-col sm:flex-row gap-4 w-fit pt-20 sm:pt-10">
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

               
            </Card>

            {/* ✅ Success Alert */}
            {showSuccess && (
                <SuccessAlert
                    message="Fingerprint matched successfully!"
                    onClose={() => setShowSuccess(false)}
                />
            )}

            {/* ❌ Error Alert */}
            {showError && (
                <ErrorAlert
                    message="Fingerprint did not match. Please try again."
                    onClose={() => setShowError(false)}
                />
            )}
        </div>
    )
}
