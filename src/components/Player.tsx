import React from 'react';
import Image from 'next/image';

interface Props {
  name: string;
  position: string;
  number: string;
}

const Player = ({ name, position, number }: Props) => (
  <div className="bg-blue-300 mt-10 rounded overflow-hidden shadow-lg w-[150px] hover:scale-105 hover:tansition hover:duration-200">
    <Image src="https://via.placeholder.com/150" width="150px" height="150px" />
    <div className="grid grid-cols-4 m-[-5.5px]">
      <div className="col-span-3 p-2 inline-block">
        <span className="block font-bold">{name}</span>
        <span className="block">{position}</span>
      </div>
      <span className="bg-red-200 text-center text-2xl font-bold pt-3 pr-1">
        {number}
      </span>
    </div>
  </div>
);

export default Player;
