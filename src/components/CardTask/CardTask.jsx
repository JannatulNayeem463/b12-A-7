import React , { useState, useEffect } from 'react';

const CardTask = ({ cardPromies, onCardClick }) => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
      cardPromies.then(data => {
        setCardData(data);
        console.log("Fetched Card Data:", data);
      }).catch(err => {
        console.error("Error fetching Card data:", err);
      });
    }, [cardPromies]);
  
  return (
    <div className=" gap-4  flex p-3">
        <div className="mt-16">
        <div className=" bg-white font-bold mt-4">Customer Tickets</div>
    <div className="card  mt-2   gap-4 max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-2  ">

    
    {
        cardData.map((card,index)=>(<div key={index} className="card-body  bg-base-100  cursor-pointer hover:shadow-md " onClick={() => onCardClick(card)}   >
            <div className="flex justify-between ">

            <h2 className="card-title  ">{card.title}</h2>
            <div className="card-actions ">
              <button className="btn bg-[#b9f8cf]  ">{card.button}</button>
            </div>
            </div>
            <p className="pt-4 text-[#627382]">{card.description}</p>
            <div className="pt-3  flex justify-between ">
                <div className="flex gap-5 ">
                    <div className="text-[#627382]">{card.id}</div>
                    <div className="text-[#f83044] ">{card.priority}</div>  
                   </div> <div className="flex  gap-5">
                    <div className="text-[#627382]">{card.status}</div>
                    <div className=" justify-end text-[#627382] ">{card.date}</div>
                </div>
            </div>
        
          </div>))
    }
</div>
</div>

</div>
  );
};

export default CardTask;