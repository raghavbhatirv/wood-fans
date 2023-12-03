const PopUpOptions = ({
     texture,
     name,
     polyester,
     meter,
     place,
     onClick,
     selected
     ,id
   }) => {
     console.log(id,selected)
    //  b/w img-size, text-12px 
     return (
      
       <div
         className={`flex  justify-stretch w-full items-center gap-10 md:gap-32 text-center  rounded-lg border px-3 m-auto cursor-pointer ${selected === id && "bg-gray-200"} text-[12px]`}
         onClick={onClick}
       >
         <div className="flex items-center gap-3">
           <img src={texture} className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" />
           <h1>{name}</h1>
         </div>
         <h1>{place}</h1>
         <h1>{polyester}</h1>
         <h1>
           {meter}
           <sup>2</sup>
         </h1>
       </div>
     );
   };

   export default PopUpOptions
   