import { useState } from "react";

const EnquiryNoteForm = ({onSubmit, isSubmitting}) => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const trimmedMessage = message.trim();
        if(!trimmedMessage){
            setError("Note cannot be empty.");
            return;
        };
        if(trimmedMessage.length > 2000){
            setError("Note must be 2000 characters or fewer.");
            return;
        }
        setError(null);
        try{
           await onSubmit(trimmedMessage);
           setMessage(""); 
        }catch(requestError){
            setError(requestError?.message || "Unable to add note.");
        }
    };
    return(
        <form onSubmit={handleSubmit} className="border-t border-gray-200 p-6">
            <label htmlFor="enquiry-note" className="block text-sm font-medium text-gray-900">Add Note</label>
            <textarea id="enquiry-note" value={message} onChange={(event) => setMessage(event.target.value)} rows={4} maxLength={2000} disabled={isSubmitting} placeholder="Add an internal note about this enwuiry..." className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 disabled:bg-gray-50"/>
            <div className="mt-2 flex items-center justify-between">
                <p className="text-xs text-gray-500">{message.length}/2000</p>
                <button type="submit" disabled={isSubmitting || !message.trim()} className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50">{isSubmitting ? "Adding..." : "Add Note"}</button>
            </div>
            {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
        </form>
    )
};

export default EnquiryNoteForm;