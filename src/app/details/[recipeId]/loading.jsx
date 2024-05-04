import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p>
        {/*  <PiSpinnerBold className="text-9xl font-bold text-black/80 dark:text-slate-300 block" />{" "}
        <span>Loading ...</span> */}
        <Image src="/spinner.svg" width={100} height={100} alt="spinner" />
      </p>
    </div>
  );
}
