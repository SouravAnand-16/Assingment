/* eslint-disable react/prop-types */
import { GoArrowUpRight } from "react-icons/go";

function SingleBlog({ blogdata }) {
  return (
    <>
      <article className="w-full md:w-1/2 lg:w-1/3">
        <div className="p-5">
          <div className="blog-img h-[240px]">
            <img
              src={blogdata.img}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-row gap-1 items-center justify-start mt-3">
            <span className="font-inter text-[14px] font-semibold leading-[20px] text-left text-[rgba(102,112,133,1)] underline-from-font decoration-none">
              {blogdata.name}
            </span>
            <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
            <span className="text-[rgba(102,112,133,1)]">{blogdata.date}</span>
            {blogdata.today && (
              <>
                {" "}
                <span className="w-[2px] h-[2px] bg-gray-800 rounded-full text-[rgba(102,112,133,1)]"></span>
                <span className="text-[rgba(102,112,133,1)]">today</span>{" "}
              </>
            )}
          </div>
          <div className="flex flex-row justify-between items-center my-3">
            <h2 className="font-bold text-xl">{blogdata.title}</h2>
            <GoArrowUpRight />
          </div>
          <p className="font-inter text-[15px] font-normal leading-[24px] text-left underline-from-font decoration-none text-[rgba(102,112,133,1)]">
            {blogdata.desc}
          </p>
          <div className="tags mt-3">
            {blogdata.tags.map((tag, i) => {
              let textColor, bgColor;

              if (i % 3 === 0) {
                textColor = "text-[rgba(105,65,198,1)]";
                bgColor = "bg-[rgba(249,245,255,1)]";
              } else if (i % 3 === 1) {
                textColor = "text-[rgba(2,122,72,1)]";
                bgColor = "bg-[rgba(236,253,243,1)]";
              } else {
                textColor = "text-[rgba(196,50,10,1)]";
                bgColor = "bg-[rgba(255,246,237,1)]";
              }

              return (
                <span
                  key={i}
                  className={`text-xs p-1 px-2 rounded-xl me-2 font-inter ${textColor} ${bgColor}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}

export default SingleBlog;
