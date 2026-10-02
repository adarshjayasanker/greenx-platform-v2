import { Link } from "react-router-dom";
import EnquiryStatusBadge from "./EnquiryStatusBadge";

const EnquiryRow = ({enquiry}) => {
    return(
        <tr className="border-b border-gray-100 last:border-b-0">
            <td className="px-4 py-4">
                <div>
                    <Link to={`/greenx-admin/leads/${enquiry.id}`} className="font-medium text-gray-900 hover:underline">{enquiry.name}</Link>
                    <p className="mt-1 text-sm text-gray-500">{enquiry.email}</p>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-700">{enquiry.phone}</td>
            <td className="px-4 py-4 text-sm text-gray-700">{enquiry.service}</td>
            <td className="px-4 py-4">
                <EnquiryStatusBadge status={enquiry.status}/>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500">
                {new Date(enquiry.createdAt).toLocaleDateString()}
            </td>
        </tr>
    )
};

export default EnquiryRow;