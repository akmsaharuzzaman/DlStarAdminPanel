import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Activity,
  UserIcon,
  Users,
  BarChart3,
  Gift,
  ChevronRight,
  Search,
  MapPin,
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("All");

  const sidebarItems = [
    { icon: Activity, label: "Dashboard", active: false },
    // { icon: ImageIcon, label: "Banner", active: false },
    { icon: UserIcon, label: "User", active: true, hasSubmenu: true },
    // { icon: Users, label: "Host", active: false, hasSubmenu: true },
    { icon: BarChart3, label: "Agency", active: false, hasSubmenu: true },
    // { icon: DollarSign, label: "Coin Seller", active: false },
    // { icon: Settings, label: "User Redeem", active: false },
    // { icon: CreditCard, label: "Plan", active: false },
    // { icon: Calendar, label: "Plan History", active: false },
    // { icon: Gamepad2, label: "Game", active: false },
    // { icon: History, label: "Game History", active: false },
    { icon: Gift, label: "Gift", active: false, hasSubmenu: true },
  ];

  const userData = [
    {
      id: 1,
      image: "/placeholder.svg?height=40&width=40",
      name: "Goni Khan",
      uniqueId: "10935325",
      gender: "Male",
      rcoin: "0",
      country: "Bangladesh",
      level: "Level 1",
      isBlock: "No",
      isHost: "No",
      agency: "-",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=40&width=40",
      name: "-",
      uniqueId: "10645664",
      gender: "-",
      rcoin: "0",
      country: "Bangladesh",
      level: "Level 1",
      isBlock: "No",
      isHost: "No",
      agency: "-",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=40&width=40",
      name: "Test",
      uniqueId: "10185125",
      gender: "Male",
      rcoin: "0",
      country: "Pakistan",
      level: "Level 1",
      isBlock: "No",
      isHost: "No",
      agency: "-",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=40&width=40",
      name: "Test old",
      uniqueId: "10814974",
      gender: "Male",
      rcoin: "0",
      country: "Pakistan",
      level: "Level 1",
      isBlock: "No",
      isHost: "No",
      agency: "-",
    },
  ];

  return (
    <div className="flex h-screen text-gray-900 bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 text-slate-800 bg-gray-100 border-r border-gray-300">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-pink-400">Onulive</h1>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item, index) => (
            <div key={index} className="relative">
              <div
                className={`flex items-center justify-between px-6 py-3 hover:bg-gray-200 cursor-pointer ${
                  item.active ? "text-gray-700 border-r-2 border-pink-400" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon
                    className={`w-5 h-5 ${
                      item.active ? "text-pink-400" : "text-gray-600"
                    }`}
                  />
                  <span
                    className={`${
                      item.active ? "text-pink-400" : "text-gray-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                {item.hasSubmenu && (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-gray-100 border-b border-gray-300 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">User</h2>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span className="text-pink-400">Dashboard</span>
            <span>/</span>
            <span>User</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-50 border-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">9</div>
                    <div className="text-gray-400 mt-1">Total User</div>
                  </div>
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                    <UserIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">0</div>
                    <div className="text-gray-400 mt-1">Total Moderator</div>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">1</div>
                    <div className="text-gray-400 mt-1">Total Coin</div>
                  </div>
                  <div className="w-12 h-12 bg-red-400 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">1</div>
                    <div className="text-gray-400 mt-1">Total Spend Coin</div>
                  </div>
                  <div className="w-12 h-12 bg-red-400 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              <Button
                variant={activeTab === "All" ? "default" : "outline"}
                onClick={() => setActiveTab("All")}
                className={`${
                  activeTab === "All"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 border-gray-600 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </Button>
              <Button
                variant={activeTab === "Analytics" ? "default" : "outline"}
                onClick={() => setActiveTab("Analytics")}
                className={`${
                  activeTab === "Analytics"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-slate-700 border-slate-600 text-gray-300 hover:bg-slate-600"
                }`}
              >
                Analytics
              </Button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="What're you searching for?"
                className="pl-10 w-80 bg-gray-100 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Data Table */}
          <Card className="bg-gray-100 border-gray-300">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-300 bg-gray-200 hover:bg-gray-700/50">
                    <TableHead className="text-gray-700">No.</TableHead>
                    <TableHead className="text-gray-700">Image</TableHead>
                    <TableHead className="text-gray-700">Name</TableHead>
                    <TableHead className="text-gray-700">Uniqueld</TableHead>
                    <TableHead className="text-gray-700">Gender</TableHead>
                    <TableHead className="text-gray-700">RCoin</TableHead>
                    <TableHead className="text-gray-700">Country</TableHead>
                    <TableHead className="text-gray-700">Level</TableHead>
                    <TableHead className="text-gray-700">isBlock</TableHead>
                    <TableHead className="text-gray-700">isHost</TableHead>
                    <TableHead className="text-gray-700">Agency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData.map((user) => (
                    <TableRow
                      key={user.id}
                      className="border-gray-300 hover:bg-gray-700/50"
                    >
                      <TableCell className="text-gray-700">{user.id}</TableCell>
                      <TableCell>
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={user.image || "/placeholder.svg"} />
                          <AvatarFallback className="bg-gray-600">
                            {user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="text-gray-700">
                        {user.name}
                      </TableCell>
                      <TableCell className="text-gray-700">
                        {user.uniqueId}
                      </TableCell>
                      <TableCell className="text-gray-700">
                        {user.gender}
                      </TableCell>
                      <TableCell className="text-red-400">
                        {user.rcoin}
                      </TableCell>
                      <TableCell className="text-green-400">
                        {user.country}
                      </TableCell>
                      <TableCell>
                        <span className="bg-yellow-600 text-yellow-100 px-2 py-1 rounded text-xs">
                          {user.level}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="bg-blue-600 text-blue-100 px-2 py-1 rounded text-xs">
                          {user.isBlock}
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-700">
                        {user.isHost}
                      </TableCell>
                      <TableCell className="text-gray-700">
                        {user.agency}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
