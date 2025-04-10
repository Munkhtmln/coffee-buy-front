import { Coffee, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function FilterView() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coffee className="h-5 w-5" />
            <span className="font-semibold">Buy Me Coffee</span>
          </div>
          <div className="relative">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="Jake"
              />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-50 min-h-[calc(100vh-57px)]">
          <nav className="p-4">
            <ul className="space-y-1">
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start bg-gray-100"
                >
                  Home
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  Explore
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <span>View page</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  Account settings
                </Button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto">
            {/* Profile section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src="/placeholder.svg?height=48&width=48"
                      alt="Jake"
                    />
                    <AvatarFallback>J</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-lg font-semibold">Jake</h2>
                    <p className="text-sm text-gray-500">
                      buymeacoffee.com/baconpancakes1
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <span>Share page link</span>
                </Button>
              </div>

              {/* Earnings section */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-medium">Earnings</h3>
                  <Select defaultValue="last30">
                    <SelectTrigger className="w-[180px] h-9">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last30">Last 30 days</SelectItem>
                      <SelectItem value="last90">Last 90 days</SelectItem>
                      <SelectItem value="alltime">All time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <h1 className="text-4xl font-bold">$450</h1>
              </div>
            </div>

            {/* Transactions section with filter */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Recent transactions</h3>
                <div className="relative">
                  <div className="absolute z-10 right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                    <div className="p-3 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="amount1" defaultChecked />
                        <label htmlFor="amount1" className="text-sm">
                          $1
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="amount2" />
                        <label htmlFor="amount2" className="text-sm">
                          $2
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="amount5" />
                        <label htmlFor="amount5" className="text-sm">
                          $5
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="amount10" />
                        <label htmlFor="amount10" className="text-sm">
                          $10
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <span>Amount</span>
                    <span className="ml-1 text-xs text-gray-500">$1</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Transaction list */}
              <Card className="overflow-hidden">
                <div className="divide-y divide-gray-200">
                  <div className="p-4">
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium">CN</span>
                        </div>
                        <div>
                          <div className="font-medium">Guest</div>
                          <div className="text-sm text-gray-500">
                            instagram.com/welesley
                          </div>
                          <div className="mt-2 text-sm text-gray-700">
                            Thank you for being so awesome everyday! You always
                            manage to brighten up my day when I'm feeling down.
                            Although $1 isn't that much money it's all I can
                            contribute at the moment
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="font-medium text-green-600">+ $1</div>
                        <div className="text-xs text-gray-500">
                          10 hours ago
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium">CN</span>
                        </div>
                        <div>
                          <div className="font-medium">Guest</div>
                          <div className="text-sm text-gray-500">
                            instagram.com/welesley
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="font-medium text-green-600">+ $1</div>
                        <div className="text-xs text-gray-500">
                          10 hours ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
