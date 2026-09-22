const statusStyles = {
    new: "bg-blue-50 text-blue-700",
    contacted: "bg-yellow-50 text-yellow-700",
    "in-progress": "bg-purple-50 text-purple-700",
    converted: "bg-green-50 text-green-700",
    closed: "bg-gray-100 text-gray-600",
};

const statusLabels = {
    new: "New",
    contacted: "Contacted",
    "in-progress": "In Progress",
    converted: "Converted",
    closed: "Closed",
};

const EnquiryStatusBadge = ({status}) => {
    const style = statusStyles[status] || "bg-gray-100 text-gray-600";
    const label = statusLabels[status] || status;
    return(
        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${style}`}>{label}</span>
    )
};

export default EnquiryStatusBadge;