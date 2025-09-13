import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import InterFinger from "./interFingers"
import { Link } from "react-router-dom"
export default function RegisterNewFingerprint() {
    const [showInterFinger, setShowInterFinger] = useState(false)

    return (
        <div
            className={`flex flex-col sm:flex-row gap-4 w-fit pt-20 sm:pt-10 transition-opacity duration-300 
                }`}
        >
            <Card className={`w-full max-w-sm ${showInterFinger ? " opacity-50 pointer-events-none" : "opacity-100"
                    }`}>
                <CardHeader>
                    <CardTitle>Register New Fingerprint</CardTitle>
                    <CardDescription>
                        Capture your fingerprint and enter your details below to register.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            {/* Name Field */}
                            <div className="grid gap-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" type="text" placeholder="John Doe" required />
                            </div>

                           
                            {/* Fingerprint Capture Button */}
                            <div className="grid gap-2">
                                <Label htmlFor="fingerprint">Fingerprint</Label>
                                <Button
                                    type="button"
                                    className="w-full"
                                    onClick={() => setShowInterFinger(true)}
                                >
                                    Capture Fingerprint
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>

                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Register
                    </Button>
                    <Link to="/" className="w-full" >
                    <Button variant="outline" className="w-full">
                        Cancel
                    </Button>
                    </Link>
                </CardFooter>
            </Card>

            {/* Conditionally Show InterFinger */}
            {showInterFinger && (
                <div className="absolute inset-0 flex items-center justify-center pt-7  ">
                    <InterFinger
                        showInterFinger={showInterFinger}
                        setShowInterFinger={setShowInterFinger}
                    />
                  
                  
                </div>
            )}
        </div>
    )
}
