import React from "react";

export default function HeadBoxSection ({title}) {
    return (
        <div className="w-full flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="font-semibold text-2xl sm:text-lg whitespace-nowrap title-box">
                  {title}
              </span>
            <div className="flex-1 border-t-2 border-dotted border-black min-w-[4rem]"></div>
        </div>
    )
}