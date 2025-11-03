import { useGetHostsWithdrawRequestsQuery } from "@/redux/api/auth.api";
import { TWidrawRequest } from "@/types/api/auth";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
// const hostsWithdrawHistory = [
//   {
//     id: "HW001",
//     name: "HostGamer1",
//     amount: 150.0,
//     withdrawDate: "2025-08-28",
//     status: "Completed",
//   },
//   {
//     id: "HW002",
//     name: "LiveStreamerPro",
//     amount: 275.25,
//     withdrawDate: "2025-08-28",
//     status: "Completed",
//   },
//   {
//     id: "HW003",
//     name: "QueenOfGames",
//     amount: 500.0,
//     withdrawDate: "2025-08-29",
//     status: "Pending",
//   },
//   {
//     id: "HW004",
//     name: "TheJoker",
//     amount: 95.5,
//     withdrawDate: "2025-08-29",
//     status: "Completed",
//   },
// ];
export const HostsWithdrawHistoryPage = ({
  onBack = "/",
}: {
  onBack: string;
}) => {
  const { data: withdrawRequestRes, isLoading } =
    useGetHostsWithdrawRequestsQuery({});
  const hostsWithdrawHistory = withdrawRequestRes?.result?.data || [];
  return (
    <div className="mx-auto p-4 sm:p-6 lg:p-8">
      <header className="mb-8">
        <Link
          to={onBack}
          className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-2"
        >
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">
          Hosts Withdraw History
        </h1>
      </header>
      <div className="space-y-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <HistoryTable
            title=""
            data={hostsWithdrawHistory}
            isLoading={isLoading}
          />
        )}
        {/* <HistoryTable title="Host Withdraws" data={hostWithdrawHistory} /> */}
      </div>
    </div>
  );
};

// Withdraw History Page Components
// type StatusType = "Completed" | "Pending" | "Failed";

// const StatusBadge = ({ status }: { status: StatusType }) => {
//   const styles: Record<StatusType, string> = {
//     Completed: "bg-green-100 text-green-800",
//     Pending: "bg-yellow-100 text-yellow-800",
//     Failed: "bg-red-100 text-red-800",
//   };
//   return (
//     <span
//       className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${styles[status]}`}
//     >
//       {status}
//     </span>
//   );
// };

const HistoryTable = ({
  title,
  data,
  isLoading,
}: {
  title: string;
  data: TWidrawRequest[];
  isLoading: boolean;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
    {/*<div className="overflow-x-auto">*/}
    {/*<table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Transaction ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Withdraw Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item._id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${item.totalSalary.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.withdrawDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <StatusBadge status={item?.status as StatusType} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>*/}

    <Alternative data={data} loading={isLoading} />
    {/*</div>*/}
  </div>
);

export const Alternative = ({
  loading,
  data,
}: {
  loading: boolean;
  data: any;
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="py-3">Transaction ID</th>
            <th>Host</th>
            <th>Account</th>
            <th>Method</th>
            <th>Day</th>
            <th>Time</th>
            <th>Audio Hour</th>
            <th>Video Hour</th>
            <th>Diamonds</th>
            <th>Salary</th>
            <th>Date</th>
            <th>Agency</th>
            <th>Status</th>
            {/*<th>Action</th>*/}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={14} className="text-center py-6 text-gray-500">
                Loading...
              </td>
            </tr>
          ) : (
            data.map((item: any) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                <td className="py-3 text-xs text-gray-600">{item._id}</td>
                <td className="flex items-center gap-2 py-3">
                  <img
                    src={item?.hostId?.avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="truncate">{item.name}</div>
                </td>
                <td className="py-3">{item.accountNumber}</td>
                <td className="capitalize py-3">
                  <Badge variant="outline">{item.accountType}</Badge>
                </td>
                <td className="py-3">{item.day}</td>
                <td className="py-3">{item.time}</td>
                <td className="py-3">{item.audioHour}</td>
                <td className="py-3">{item.videoHour}</td>
                <td className="py-3">{item.totalDiamond.toLocaleString()}</td>
                <td className="py-3">${item.totalSalary}</td>
                <td className="py-3">
                  {new Date(item.withdrawDate).toLocaleString()}
                </td>
                <td className="py-3">{item?.agencyId?.name}</td>
                <td className="py-3">
                  <Badge className="text-white">{item.status}</Badge>
                </td>
                {/*<td className="py-3">
                          <button className="text-indigo-600 hover:underline text-sm">View</button>
                        </td>*/}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
