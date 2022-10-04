import React from "react";

interface Props {
  url: string;
  name: string;
}

const CatImage = ({ url, name }: Props) => {
  return (
    <div>
      <img
        className="rounded-3xl w-48 h-48 xl:w-60 xl:h-52 2xl:w-80 2xl:h-72"
        src={url}
        alt={name}
      />
    </div>
  );
};

export default CatImage;
