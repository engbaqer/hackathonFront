import { XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ErrorAlert({ message, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm text-center animate-fade-in">
                <XCircle className="mx-auto text-red-500 w-12 h-12 mb-4" />
                <h2 className="text-lg font-semibold text-red-600 mb-2">
                    Error
                </h2>
                <p className="text-gray-600">{message}</p>

                <Button
                    className="mt-4 w-full bg-red-600 hover:bg-red-700"
                    onClick={onClose}
                >
                    Try Again
                </Button>
            </div>
        </div>
    )
}
