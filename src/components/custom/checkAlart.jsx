import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SuccessAlert({ message, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm text-center animate-fade-in">
                <CheckCircle className="mx-auto text-green-500 w-12 h-12 mb-4" />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Success!
                </h2>
                <p className="text-gray-600">{message}</p>

                <Button
                    className="mt-4 w-full bg-green-600 hover:bg-green-700"
                    onClick={onClose}
                >
                    OK
                </Button>
            </div>
        </div>
    )
}
