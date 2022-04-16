import Image from 'next/image';
import React from 'react';
import Table from '../src/components/Table';

const Players = () => (
  <div className="h-screen mx-10">
    <h3>Classy Glueros</h3>
    <Image src="https://via.placeholder.com/500" width="800px" height="300px" />
    <div className="mx-10">
      <h3>Players</h3>
      <hr />
      <div className="bg-blue-300 mt-10 rounded overflow-hidden shadow-lg w-[150px]">
        <div className="w-full">
          <Image
            src="https://via.placeholder.com/150"
            width="150px"
            height="150px"
          />
        </div>
        <span className="block font-bold">David Berry</span>
        <span className="block">Defender</span>
      </div>
    </div>
    <Table />
  </div>
);

export default Players;
