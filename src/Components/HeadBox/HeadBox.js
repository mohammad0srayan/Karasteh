import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";

export default function HeadBox ({title}) {
    return (
        <div className="w-full flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="font-semibold text-xl max-[450px]:text-md whitespace-nowrap title-box">
                  {title}
              </span>
            <div className="flex-1 border-t-2 border-dotted bg-black min-w-[4rem]"></div>
            <div className="flex gap-2 shrink-0 max-[960px]:hidden">
                <button className="px-3 py-2 bg-white shadow-md text-black rounded-xl hover:bg-gray-100 transition">
                    <ArrowForwardIcon fontSize="small" />
                </button>
                <button className="px-3 py-2 bg-red-500 shadow-md text-white rounded-xl hover:bg-red-600 transition">
                    <ArrowBackIcon fontSize="small" />
                </button>
            </div>
        </div>
    )
}