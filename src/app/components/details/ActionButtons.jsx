"use client";

import { FaRegHeart } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";
import useAuth from "@/app/hooks/useAuth";
import { useEffect, useState, useTransition } from "react";
import { addRemodeFavourite } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function ActionButtons({ id }) {
  const { auth } = useAuth();
  const [favourite, setFovourite] = useState(null);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  console.log(favourite);

  console.log("auth in actionButton: ", auth);
  console.log("recipeId: ", id);
  console.log("auth?.favourites.includes(id): ", auth?.favourites.includes(id));
  console.log("favourite,", favourite);

  useEffect(() => {
    setFovourite(auth?.favourites.includes(id));
  }, [id]);

  const toggleFavourite = async () => {
    if (auth) {
      await addRemodeFavourite(auth?.id, id);
      setFovourite(!favourite);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex gap-4 justify-end">
      <div className="">
        <button
          className={`flex items-center gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36] ${
            favourite && "text-[#eb4a36]"
          }`}
          onClick={() =>
            startTransition(() => {
              toggleFavourite();
            })
          }
        >
          <FaRegHeart className="pt-0.5 text-lg" />
          <span>Favourite</span>
        </button>
      </div>

      <div>
        <button className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
          <GrShareOption />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}
