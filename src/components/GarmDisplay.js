import React from "react";

const GarmDisplay = ({
  garm,
  deleteGarm,
  toggleOwn,
  wantedGarms,
  ownedGarms,
}) => {
  return (
    <div>
      <h2>{garm.title}</h2>
      <h4>
        {garm.brand} - ${garm.cost} ({garm.condition})
      </h4>
      <h5>
        {garm.type}, {garm.season}
      </h5>
      <img
        src={garm.img}
        alt={`${garm.title}, ${garm.brand}, ${garm.condition}`}
        style={{ width: 300 }}
      ></img>
      <div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            deleteGarm(garm.id);
          }}
        >
          Delete Garm!
        </button>
        {garm.own === false ? (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleOwn(garm.id, garm.own);
              console.log(wantedGarms);
              console.log(ownedGarms);
              // console.log(garm.own);
            }}
          >
            Mark as "Owned"
          </button>
        ) : (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleOwn(garm.id, garm.own);
              console.log(wantedGarms);
              console.log(ownedGarms);
              // console.log(garm.own);
            }}
          >
            Mark as "Wanted"
          </button>
        )}
      </div>
    </div>
  );
};

export default GarmDisplay;
