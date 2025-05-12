
import React from 'react'
function Props () {
  const Card = [
    {rating: "100%",
    description: "average list growth for all paid plans in the first 30 days"
    },
    {rating: "99%",
    description: "deliverability rate for 160+ countries"
    },
    {rating: "350k+",
      description:"customers worldwide trust us with their email marketing"
    },
    {rating: "24/7",
    description:"support from a 5-star rated Customer Success Team"
  },
  ];
  return (
    <section>
    {Card.map((c) =>(
        <div className="flex font-bold">
      <p className="text-[50px]">{c.rating}</p><br/>
      <br/>
    <p>{c.description}</p>
      </div>
    )) }
  </section>

  )
};
export default Props;


