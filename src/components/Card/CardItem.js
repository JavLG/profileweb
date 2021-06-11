const CardItem = ({projectDetail : {description, imgUrl, name, seoTags, technologies}}) => {

  console.log(description, imgUrl, name, seoTags, technologies)
  return (
    <>

                    
                      {/*JSON.stringify(projectDetail)*/}
                    

        <div className="bg-white border-t-4 border-green-400 shadow-md  rounded-3xl mx-8 p-4 max-w-xl">
                <div className="flex-none lg:flex">
                    <div className="h-64 w-full md:min-h-85 lg:h-48 lg:w-96  lg:mb-0 mb-3">
                        <img src={imgUrl}
                            alt={
                              technologies.reduce((tec,acc) => acc = acc + "," + tec)
                            }  className=" w-full object-contain h-full  lg:h-48 rounded-2xl" />
                    </div>
                    <div className="flex-auto ml-3 justify-evenly py-2">
                        <div className="flex flex-wrap ">
                            <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                                Proyecto:
                            </div>
                            <h2 className="flex-auto text-lg font-medium">{name}</h2>
                        </div>
                        <p className="mt-3">
                          {description ? description : null}
                        </p>
                        <div className="flex py-4  text-sm text-gray-600">
                            <div className="flex-1 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <p className="">Cochin,KL</p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p className="">05-25-2021</p>
                            </div>
                        </div>
                        <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div className="flex space-x-3 text-sm font-medium">
                            <div className="flex-auto flex space-x-3">
                                
                            </div>
                            <button
                                className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                type="button" aria-label="like">Edit Shop</button>
                        </div>
                    </div>
                </div>
            </div>




    </>
  )
}

export default CardItem;

