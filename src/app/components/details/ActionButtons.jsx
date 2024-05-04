"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrShareOption } from "react-icons/gr";
import useAuth from "@/app/hooks/useAuth";
import { useEffect, useState, useTransition } from "react";
import { addRemoveUser, findUser } from "@/app/actions";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  
} from "react-share";

export default function ActionButtons({ id }) {
  const { auth, setAuth } = useAuth();
  const [favourite, setFovourite] = useState(null);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const pathName = usePathname();
  //const url = router.pathname;
  const [url, setUrl] = useState("");
  console.log( url);


  useEffect(() => {
    setFovourite(auth?.favourites.includes(id));
    console.log("winnn",window.location.href)
    setUrl(window.location.href);

  }, [id, auth]);

  const toggleFavourite = async () => {
    if (auth) {
      const user = await addRemoveUser(auth?.id, id);
      if (user) {
        console.log("updated user: ", user);
        setAuth(user);
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex gap-4 justify-end relative">
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
        <button
          className={`flex items-center gap-2 text-gray-600 cursor-pointer  hover:text-[#0E79F6] %${
            showSocialIcons && "text-[#0E79F6] font-semibold "
          }`}
          onClick={() => setShowSocialIcons(!showSocialIcons)}
        >
          <GrShareOption />
          <span>Share</span>
        </button>
      </div>

      {showSocialIcons && (
        <div className="absolute right-0  top-full mt-2 w-44 rounded-md bg-white py-2 z-10 shadow-lg flex justify-evenly">
         
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={36} round={true} />
          </WhatsappShareButton>
          <EmailShareButton url={url}>
            <EmailIcon size={36} round={true} />
          </EmailShareButton>
          <TwitterShareButton url={url}>
            {/*  <TwitterIcon size={36} round={true} /> */}
            <FaXTwitter size={36} round={true} className="bg-gray-100" />
          </TwitterShareButton>
          <FacebookShareButton url={url}>
            <FacebookIcon size={36} round={true} />
          </FacebookShareButton>
          
        </div>
      )}
    </div>
  );
}
