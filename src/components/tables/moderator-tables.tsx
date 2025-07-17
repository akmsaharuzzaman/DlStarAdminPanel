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

export function ModeratorTable({
  moderatorsData,
  isLoading,
}: {
  moderatorsData?: TUser[] | undefined;
  isLoading?: boolean | undefined;
}) {
  return (
    <Card className="bg-gray-100 border-gray-300">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-300 bg-gray-200">
              <TableHead className="text-gray-700 text-sm">No.</TableHead>
              <TableHead className="text-gray-700 text-sm">Image</TableHead>
              <TableHead className="text-gray-700 text-sm">Name</TableHead>
              <TableHead className="text-gray-700 text-sm">Uniqueld</TableHead>
              <TableHead className="text-gray-700 text-sm">Gender</TableHead>
              <TableHead className="text-gray-700 text-sm">RCoin</TableHead>
              <TableHead className="text-gray-700 text-sm">Country</TableHead>
              <TableHead className="text-gray-700 text-sm">Level</TableHead>
              <TableHead className="text-gray-700 text-sm">isBlock</TableHead>
              <TableHead className="text-gray-700 text-sm">isHost</TableHead>
              <TableHead className="text-gray-700 text-sm">Agency</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <UsersLoadingSkeleton />
            ) : (
              moderatorsData?.map((moderator, index: number) => (
                <TableRow
                  key={user._id}
                  className="border-gray-300 hover:bg-gray-100"
                >
                  <TableCell className="text-gray-700 text-sm">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gray-200 text-black text-sm">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="text-gray-700 text-sm">
                    {user.name}
                  </TableCell>
                  <TableCell className="text-gray-700 text-sm">
                    {user.uid}
                  </TableCell>
                  <TableCell className="text-gray-700 text-sm">
                    {user.gender}
                  </TableCell>
                  <TableCell className="text-red-600 text-sm">
                    {user?.rcoin}
                  </TableCell>
                  <TableCell className="text-green-600 text-sm">
                    {user?.country}
                  </TableCell>
                  <TableCell>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                      {user.level}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {user?.isBlock}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-700 text-sm">
                    {user?.isHost}
                  </TableCell>
                  <TableCell className="text-gray-700 text-sm">
                    {user?.agency}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
