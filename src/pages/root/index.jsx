"use client";

import { useState } from "react";
import Tree from "../../components/Tree";
import NutrientInput from "../../components/NutrientInput";
import UserSelector from "../../components/UesrSelector";

export default function GrowthGame() {
  const [users, setUsers] = useState([
    { id: 1, name: "ユーザー1", posts: 0, light: 0, reactions: 0 },
    { id: 2, name: "ユーザー2", posts: 0, light: 0, reactions: 0 },
    { id: 3, name: "ユーザー3", posts: 0, light: 0, reactions: 0 },
  ]);
  const [currentUserId, setCurrentUserId] = useState(1);

  const currentUser = users.find((user) => user.id === currentUserId);

  const updateUserNutrient = (nutrient, value) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === currentUserId ? { ...user, [nutrient]: value } : user
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-white">木育成ゲーム</h1>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        {/* <UserSelector
          users={users}
          currentUserId={currentUserId}
          onSelectUser={setCurrentUserId}
        /> */}
        <Tree
          height={currentUser.posts + currentUser.reactions}
          breadth={currentUser.light}
        />
        {/* <div className="mt-6 space-y-4">
          <NutrientInput
            label="投稿数"
            value={currentUser.posts}
            onChange={(value) => updateUserNutrient("posts", value)}
          />
          <NutrientInput
            label="光"
            value={currentUser.light}
            onChange={(value) => updateUserNutrient("light", value)}
          />
          <NutrientInput
            label="ユーザーの反応"
            value={currentUser.reactions}
            onChange={(value) => updateUserNutrient("reactions", value)}
          />
        </div> */}
      </div>
    </div>
  );
}
