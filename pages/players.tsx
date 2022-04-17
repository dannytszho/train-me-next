import Image from 'next/image';
import React from 'react';
import Table from '../src/components/Table';

const Players = () => (
  <div className="h-full mx-10">
    <h3>Classy Glueros</h3>
    <Image src="https://via.placeholder.com/500" width="800px" height="300px" />
    <div className="mx-10">
      <h3>Players</h3>
      <hr />
      {/** Cards go here */}
      <div className="grid grid-cols-2 md:pl-16 lg:pl-20 ustify-center md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-blue-300 mt-10 rounded overflow-hidden shadow-lg w-[150px] hover:scale-105 hover:tansition hover:duration-200">
          <Image
            src="https://via.placeholder.com/150"
            width="150px"
            height="150px"
          />
          <div className="grid grid-cols-3 m-[-5.5px]">
            <div className="col-span-2 p-2 inline-block">
              <span className="block font-bold">David Berry</span>
              <span className="block">Defender</span>
            </div>
            <span className="bg-red-200 text-center text-2xl font-bold pt-3 pr-1">
              10
            </span>
          </div>
        </div>
        <div className="bg-blue-300 mt-10 rounded overflow-hidden shadow-lg w-[150px] hover:scale-105 hover:tansition hover:duration-200">
          <Image
            src="https://via.placeholder.com/150"
            width="150px"
            height="150px"
          />
          <div className="grid grid-cols-3 m-[-5.5px]">
            <div className="col-span-2 p-2 inline-block">
              <span className="block font-bold">David Berry</span>
              <span className="block">Defender</span>
            </div>
            <span className="bg-red-200 text-center text-2xl font-bold pt-3 pr-1">
              10
            </span>
          </div>
        </div>
        <div className="bg-blue-300 mt-10 rounded overflow-hidden shadow-lg w-[150px] hover:scale-105 hover:tansition hover:duration-200">
          <Image
            src="https://via.placeholder.com/150"
            width="150px"
            height="150px"
          />
          <div className="grid grid-cols-3 m-[-5.5px]">
            <div className="col-span-2 p-2 inline-block">
              <span className="block font-bold">David Berry</span>
              <span className="block">Defender</span>
            </div>
            <span className="bg-red-200 text-center text-2xl font-bold pt-3 pr-1">
              10
            </span>
          </div>
        </div>
        <div className="bg-blue-300 mt-10 rounded overflow-hidden shadow-lg w-[150px] hover:scale-105 hover:tansition hover:duration-200">
          <Image
            src="https://via.placeholder.com/150"
            width="150px"
            height="150px"
          />
          <div className="grid grid-cols-3 m-[-5.5px]">
            <div className="col-span-2 p-2 inline-block">
              <span className="block font-bold">David Berry</span>
              <span className="block">Defender</span>
            </div>
            <span className="bg-red-200 text-center text-2xl font-bold pt-3 pr-1">
              10
            </span>
          </div>
        </div>
        <div className="bg-blue-300 mt-10 rounded overflow-hidden shadow-lg w-[150px] hover:scale-105 hover:tansition hover:duration-200">
          <Image
            src="https://via.placeholder.com/150"
            width="150px"
            height="150px"
          />
          <div className="grid grid-cols-3 m-[-5.5px]">
            <div className="col-span-2 p-2 inline-block">
              <span className="block font-bold">David Berry</span>
              <span className="block">Defender</span>
            </div>
            <span className="bg-red-200 text-center text-2xl font-bold pt-3 pr-1">
              10
            </span>
          </div>
        </div>
        <div className="bg-blue-300 mt-10 rounded overflow-hidden shadow-lg w-[150px] hover:scale-105 hover:tansition hover:duration-200">
          <Image
            src="https://via.placeholder.com/150"
            width="150px"
            height="150px"
          />
          <div className="grid grid-cols-3 m-[-5.5px]">
            <div className="col-span-2 p-2 inline-block">
              <span className="block font-bold">David Berry</span>
              <span className="block">Defender</span>
            </div>
            <span className="bg-red-200 text-center text-2xl font-bold pt-3 pr-1">
              10
            </span>
          </div>
        </div>
      </div>
    </div>
    <Table />
  </div>
);

export default Players;