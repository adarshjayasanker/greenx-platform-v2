import { Link } from "react-router-dom";
import EnquiryStatusBadge from "./EnquiryStatusBadge";
import formatEnquiryAge from "../utils/formatEnquiryAge";
import isStaleEnquiry from "../utils/isStaleEnquiry";
import isFollowUpDue from "../utils/isFollowUpDue";
import formatFollowUpDate from "../utils/formatFollowUpDate";

const EnquiryRow = ({enquiry}) => {
    const stale = isStaleEnquiry(enquiry);
    const followUpDue = isFollowUpDue(enquiry);
    return(
        <tr className="border-b border-gray-100 last:border-b-0">
            <td className="px-4 py-4">
                <div>
                    <Link to={`/greenx-admin/leads/${enquiry.id}`} className="font-medium text-gray-900 hover:underline">{enquiry.name}</Link>
                    <div className="mt-1 space-y-0.5">
                        <p className="text-sm text-gray-500">{enquiry.email}</p>
                        <p className="text-sm text-gray-500">{enquiry.phone}</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-700">{enquiry.service}</td>
            <td className="px-4 py-4">
                <EnquiryStatusBadge status={enquiry.status}/>
                <div className="mt-1">
                    {followUpDue && (
                        <span className="text-xs font-medium text-amber-700">Follow-up due</span>
                    )}
                    {enquiry.followUpAt && (
                        <p className="mt-1 text-xs text-gray-500">Follow-up:{" "}{formatFollowUpDate(enquiry.followUpAt)}</p>
                    )}
                </div>
            </td>
            <td className={`px-4 py-4 text-sm ${stale ? "font-medium text-amber-700" : "text-gray-500"}`}>
                {formatEnquiryAge(enquiry.createdAt)}
            </td>
        </tr>
    )
};

export default EnquiryRow;