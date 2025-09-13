import Img1 from '../imges/istockphoto-1140515808-612x612.jpg'
import Img2 from '../imges/istockphoto-1312699802-612x612.jpg'
import {
    Card,
    
    CardDescription,
  
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"

export default function navigationPage() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 w-fit  gap-10  ">
            {/* Register Card */}
            <Link to="/register" className="w-full max-w-sm hover:scale-105 transition-transform">
            <Card className="w-full h-fit max-w-sm">
                <img
                    src={Img1} // replace with your image path
                    alt="Register Fingerprint"
                    className="w-fit h-fit object-cover rounded-t-lg"
                />
                <CardHeader>
                    <CardTitle>Register New Fingerprint</CardTitle>
                    <CardDescription>
                        Capture and store a new fingerprint for future matching.
                    </CardDescription>
                </CardHeader>
            </Card>
            </Link>
            <Link to="/match" className="w-full max-w-sm hover:scale-105 transition-transform">
            {/* Search Card */}
            <Card className="w-full h-fit max-w-sm">
                <img
                    src={Img2} // replace with your image path
                    alt="Search Fingerprint"
                    className="w-fit h-fit object-cover rounded-t-lg"
                />
                <CardHeader>
                    <CardTitle>Search / Match Fingerprint</CardTitle>
                    <CardDescription>
                        Scan a fingerprint and check if it matches any registered finger.
                    </CardDescription>
                </CardHeader>
            </Card>
            </Link>
        </div>


    )
}
