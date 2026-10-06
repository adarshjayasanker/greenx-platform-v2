import { useState } from "react";

const toInputDateTime = (value) => {
    if(!value){
        return "";
    };
    const date = new Date(value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`
};

const EnquiryFollowUp = ({followUpAt, isUpdating, error, onUpdate}) => {
    const [inputValue, setInputValue] = useState(toInputDateTime(followUpAt));
    const handleSubmit = async(event) => {
        event.preventDefault();
        if(!inputValue){
            return;
        }
        const date = new Date(inputValue);
        await onUpdate(date.toISOString());
    };
    const handleClear = async() => {
        await onUpdate(null);
        setInputValue("");
    }
    return(
        <section className="rounded-lg border border-gray-200 bg-white">
            <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">Follow-Up</h2>
                <p className="mt-1 text-sm text-gray-500">Schedule when this enquiry should be followed up.</p>
            </div>
            <div className="space-y-4 p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="follow-up-date" className="block text-sm font-medium text-gray-900">Follow-up date and time</label>
                        <input id="follow-up-date" type="datetime-local" value={inputValue} onChange={(event) => setInputValue(event.target.value)} disabled={isUpdating} className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-gray-500 focus:ring focus:ring-gray-500 disabled:bg-gray-50" />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button type="submit" disabled={isUpdating || !inputValue} className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50">
                            {isUpdating ? "Saving..." : followUpAt ? "Update follow-up" : "Schedule follow-up"}
                        </button>
                        {followUpAt && (
                            <button type="button" onClick={handleClear} disabled={isUpdating} className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">Clear follow-up</button>
                        )}
                    </div>
                </form>
                {followUpAt && (
                    <p className="text-sm text-gray-600">
                        Currently scheduled for{" "}
                        <span className="font-medium text-gray-900">{new Date(followUpAt).toLocaleString()}</span>
                    </p>
                )}
                {error && (
                    <p className="text-sm text-red-600">{error.message || "Unable to update follow-up"}</p>
                )}
            </div>
        </section>
    )
};

export default EnquiryFollowUp;