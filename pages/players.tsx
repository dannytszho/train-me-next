import Image from 'next/image';
import React, { useState, useEffect, FC } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import Player from '../src/components/Player';
import { db } from '../firebase';
import classyGueros from '../public/picture/classyGueros.JPG';

const Players = () => {
  const [players, setPlayers] = useState<any>([]);
  useEffect(() => {
    async function getPlayers() {
      const playerCollection = collection(db, 'train');
      const playerSnapshot = await getDocs(playerCollection);
      // eslint-disable-next-line no-shadow
      const players = playerSnapshot.docs.map((doc) => {
        const data = doc.data() as any;
        data.id = doc.id;
        return data;
      });
      setPlayers(players);
    }
    getPlayers();
  }, []);

  return (
    <div className="h-full mx-10">
      <h3>Classy Gueros</h3>
      <Image src={classyGueros} width="900px" height="600px" />
      <div className="mx-10">
        <h3>Players</h3>
        <hr />
        <div className="grid grid-cols-2 md:pl-16 lg:pl-20 justify-center md:grid-cols-3 lg:grid-cols-4">
          {/** Cards go here 
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
          </div> */}
          {players.map((player: any) => (
            <Player
              name={player.name}
              position={player.position}
              number={player.number}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;
