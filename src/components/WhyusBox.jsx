
function whyusBox({data}) {
  return (
    <div className="p-2 w-full md:w-[340px]">
        <div className="text-center p-4 rounded-md h-full" style={{backgroundColor : data.bgcolor}}>
            <img src={data.svg} alt="" className="inline-block mx-auto mb-2"/>
            <h3 className="mb-2 font-semibold">{data.title}</h3>
            <p className="font-rubik text-[15px] font-normal leading-[22.5px] text-center text-[rgba(102,102,102,1)] underline-from-font decoration-none">{data.desc}</p>
        </div>
    </div>
  )
}

export default whyusBox