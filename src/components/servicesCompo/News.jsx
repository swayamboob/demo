const News = () => {
    return (
        <div id="News" className="">
            <div className="flex w-full justify-center items-center" >
                {/* <h1 className="text-white center">News</h1> */}
                <div className="flex mf:flex-row flex-col items-center justify-between p-20 py-12 px-4">
                    <div className=" flex-1 flex flex-col justify-start">
                        <h1 className="text-[white] bg-black text-3xl border-2 border-[#2952e3] px-20 my-1 rounded-full font-semibold ">News</h1>
                    </div>
                </div>

            </div>
            <div >
                <rssapp-carousel id="tzL2rTk1vXMgpiTq"></rssapp-carousel>
            </div>
            <br />
            <div >
                <rssapp-ticker id="tzL2rTk1vXMgpiTq"></rssapp-ticker>
            </div>
            <br />

        </div>
    )
}
export default News;