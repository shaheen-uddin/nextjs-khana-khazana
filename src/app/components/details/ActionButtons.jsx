"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";
import useAuth from "@/app/hooks/useAuth";
import { useEffect, useState, useTransition } from "react";
import { addRemoveUser, findUser } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function ActionButtons({ id }) {
  const { auth, setAuth } = useAuth();
  const [favourite, setFovourite] = useState(null);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  //console.log(favourite);

  /*   console.log("auth in actionButton: ", auth);
  console.log("recipeId: ", id);
  */
  console.log("auth?.favourites.includes(id): ", auth?.favourites.includes(id));
  console.log("favourite,", favourite);

  useEffect(() => {
    setFovourite(auth?.favourites.includes(id));
  }, [id, auth]);

  const toggleFavourite = async () => {
    if (auth) {
      const user = await addRemoveUser(auth?.id, id);

      /*   const user = await findUser(auth?.id);
      console.log("user :", user); */
      if (user) {
        console.log("updated user: ", user);
        setAuth(user);
        //setFovourite(!favourite);
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex gap-4 justify-end">
      <div className="">
        <button
          className={`flex items-center gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36] ${
            favourite && "text-red-600 font-semibold "
          }`}
          onClick={() =>
            startTransition(() => {
              toggleFavourite();
            })
          }
        >
          {favourite ? (
            <FaHeart className="pt-0.5 text-lg" />
          ) : (
            <FaRegHeart className="pt-0.5 text-lg" />
          )}

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
