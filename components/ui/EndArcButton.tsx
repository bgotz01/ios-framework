"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface EndArcButtonProps {
    arcId: string;
    className?: string;
}

export default function EndArcButton({ arcId, className = "" }: EndArcButtonProps) {
    const router = useRouter();
    const [showEndArcModal, setShowEndArcModal] = useState(false);
    const [endingArc, setEndingArc] = useState(false);

    const handleEndArc = async (action: 'archive' | 'delete') => {
        setEndingArc(true);
        try {
            if (action === 'archive') {
                const response = await fetch(`/api/arcs/${arcId}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ status: 'ARCHIVED' }),
                });

                if (response.ok) {
                    router.push('/dashboard');
                } else {
                    const data = await response.json();
                    console.error("Failed to archive arc:", data);
                    alert("Failed to archive arc. Please try again.");
                }
            } else if (action === 'delete') {
                const response = await fetch(`/api/arcs/${arcId}`, {
                    method: "DELETE",
                });

                if (response.ok) {
                    router.push('/dashboard');
                } else {
                    const data = await response.json();
                    console.error("Failed to delete arc:", data);
                    alert("Failed to delete arc. Please try again.");
                }
            }
        } catch (error) {
            console.error("Error ending arc:", error);
            alert("Error ending arc. Please try again.");
        } finally {
            setEndingArc(false);
            setShowEndArcModal(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setShowEndArcModal(true)}
                disabled={endingArc}
                className={`px-4 py-2 text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors disabled:opacity-50 font-medium ${className}`}
                title="End this arc"
            >
                {endingArc ? "Ending Arc..." : "End Arc"}
            </button>

            {/* End Arc Modal */}
            {showEndArcModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
                        <h3 className="text-lg font-semibold mb-4">End Arc</h3>
                        <p className="text-muted-foreground mb-6">
                            What would you like to do with this arc?
                        </p>
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => handleEndArc('archive')}
                                disabled={endingArc}
                                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 text-left"
                            >
                                <div className="font-medium">Archive Arc</div>
                                <div className="text-sm text-blue-100">
                                    Keep the arc data but hide it from active view
                                </div>
                            </button>
                            <button
                                onClick={() => handleEndArc('delete')}
                                disabled={endingArc}
                                className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 text-left"
                            >
                                <div className="font-medium">Delete Arc Permanently</div>
                                <div className="text-sm text-red-100">
                                    Permanently remove all arc data (cannot be undone)
                                </div>
                            </button>
                            <button
                                onClick={() => setShowEndArcModal(false)}
                                disabled={endingArc}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}