import React from 'react';

interface PlaceInterface {
  name: string;
  img: string;
}

interface Props {
  place: PlaceInterface
}

export const Place: React.FC <Props> = ({ place }) => {
  return (
    <div className="place" key={place.name}>
      <img src={place.img} alt="" className="place__img"/>
      <p className="places__name">
        {place.name}
      </p>
    </div>
  );
};
