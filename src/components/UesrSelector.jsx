// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";

// export default function UserSelector({ users, currentUserId, onSelectUser }) {
//   const currentUser = users.find((user) => user.id === currentUserId);

//   return (
//     <div className="mb-4">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline" className="w-full justify-between">
//             {currentUser?.name}
//             <ChevronDown className="ml-2 h-4 w-4" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="w-full">
//           {users.map((user) => (
//             <DropdownMenuItem
//               key={user.id}
//               onSelect={() => onSelectUser(user.id)}
//             >
//               {user.name}
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }
