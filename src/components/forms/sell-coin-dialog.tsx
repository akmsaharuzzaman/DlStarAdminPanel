import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { TUser } from "@/types/api/auth";

const sellCoinSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  coinAmount: z.number().min(1, "Amount must be at least 1"),
});

type SellCoinFormValues = z.infer<typeof sellCoinSchema>;

type SellCoinDialogProps = {
  open: boolean;
  onClose: () => void;
  users: Array<TUser>;
};

export function SellCoinDialog({ open, onClose, users }: SellCoinDialogProps) {
  const [searchName, setSearchName] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(searchName.toLowerCase())
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<SellCoinFormValues>({
    resolver: zodResolver(sellCoinSchema),
    defaultValues: { userId: "", coinAmount: 1 },
  });

  const onSubmit = (data: SellCoinFormValues) => {
    setSuccessMsg(
      `Successfully added ${data.coinAmount} coins to user ${data.userId}`
    );
    setTimeout(() => {
      onClose();
      setSuccessMsg("");
      reset();
    }, 1500);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-pink-500 text-xl"
          onClick={() => {
            onClose();
            reset();
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-pink-500">Sell Coin</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search User by Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-pink-400"
              placeholder="Type user name..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            {searchName && (
              <div className="mt-2 max-h-32 overflow-y-auto border rounded bg-white shadow">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <div
                      key={user._id}
                      className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-pink-50 text-sm"
                      onClick={() => {
                        setValue("userId", user._id);
                        setSearchName(user.name);
                      }}
                    >
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-8 h-8 rounded-full border border-gray-200 object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold border border-gray-200">
                          {user.name?.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800">
                          {user.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {user.email}
                        </span>
                        <span className="text-xs text-gray-400">
                          ID: {user._id}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-3 py-2 text-gray-400 text-sm">
                    No user found
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User ID
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-600"
              {...register("userId")}
              readOnly
            />
            {errors.userId && (
              <p className="text-xs text-red-500 mt-1">
                {errors.userId.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Coin Amount
            </label>
            <input
              type="number"
              min={1}
              className="w-full border border-gray-300 rounded px-3 py-2"
              {...register("coinAmount", { valueAsNumber: true })}
            />
            {errors.coinAmount && (
              <p className="text-xs text-red-500 mt-1">
                {errors.coinAmount.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded mt-2"
          >
            Sell Coin
          </button>
          {successMsg && (
            <p className="text-green-600 text-sm mt-2 text-center">
              {successMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
