import { Card, CardContent } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TUser } from "@/types/api/auth";
import { UsersLoadingSkeleton } from "../skeleton/user-table-lists-skeleton";

export function UserTable({
  usersData,
  isLoading,
}: {
  usersData?: TUser[] | undefined;
  isLoading?: boolean | undefined;
}) {
  return (
    <Card className="bg-gray-100 border-gray-300">
      <CardContent className="p-0">
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[700px] md:min-w-full">
            <TableHeader>
              <TableRow className="border-gray-300 bg-gray-200">
                <TableHead className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                  No.
                </TableHead>
                <TableHead className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                  Image
                </TableHead>
                <TableHead className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                  Name
                </TableHead>
                <TableHead className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                  Uniqueld
                </TableHead>
                <TableHead className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                  Gender
                </TableHead>
                {/* <TableHead className="text-gray-700 text-xs md:text-sm px-2 md:px-4">RCoin</TableHead> */}
                <TableHead className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                  Role
                </TableHead>
                <TableHead className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                  Country
                </TableHead>
                <TableHead className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                  Level
                </TableHead>
                <TableHead className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                  isBlock
                </TableHead>
                <TableHead className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                  isHost
                </TableHead>
                <TableHead className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                  Agency
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <UsersLoadingSkeleton />
              ) : (
                usersData?.map((user, index) => (
                  <TableRow
                    key={user._id}
                    className="border-gray-300 hover:bg-gray-100"
                  >
                    <TableCell className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                      {index + 1}
                    </TableCell>
                    <TableCell className="px-2 md:px-4">
                      <Avatar className="w-8 h-8 md:w-10 md:h-10">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gray-200 text-black text-xs md:text-sm">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                      {user.name}
                    </TableCell>
                    <TableCell className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                      {user.uid}
                    </TableCell>
                    <TableCell className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                      {user.gender}
                    </TableCell>
                    <TableCell className="text-red-600 text-xs md:text-sm px-2 md:px-4">
                      {user?.userRole}
                    </TableCell>
                    <TableCell className="text-green-600 text-xs md:text-sm px-2 md:px-4">
                      {user?.country}
                    </TableCell>
                    <TableCell className="px-2 md:px-4">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-[10px] md:text-xs">
                        {user.level}
                      </span>
                    </TableCell>
                    <TableCell className="px-2 md:px-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] md:text-xs">
                        {user?.isBlock}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                      {user?.isHost}
                    </TableCell>
                    <TableCell className="text-gray-700 text-xs md:text-sm px-2 md:px-4">
                      {user?.agency}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}


