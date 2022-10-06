import React from "react";

interface Props {
  name: string;
  cant: number;
}

const arr = [1, 2, 3, 4, 5];
const BreedSkills = ({ name, cant }: Props) => {
  return (
    <div className="grid grid-cols-3 mt-6">
      <p className="font-bold text-lg">{name}:</p>
      <div className="col-span-2 flex items-center">
        {arr.map(item => (
          <div
            key={item}
            className={`w-16 h-3 rounded-lg ${
              item <= cant ? "bg-skillColor" : "bg-noSkill"
            } ml-3`}
          />
        ))}
      </div>
    </div>
  );
};

export default BreedSkills;
