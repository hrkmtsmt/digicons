import React, { useState, useEffect } from "react";
import { Section } from "./section";
import { IconBox } from "./icon-box";
import axios from "axios";
type Icons = {
  category: string;
  icons: string[];
};

export const Loop = () => {
  const [fetchData, setFetchData] = useState<Icons[]>([]);
  useEffect(() => {
    const headers = { "X-API-KEY": process.env.REACT_APP_API_KEY };
    const endpoint = `${process.env.REACT_APP_ENDPOINT}icons`;
    axios.get(endpoint, { headers: headers }).then((res) => {
      setFetchData(res.data.contents);
    });
  }, []);
  return (
    <React.Fragment>
      {fetchData.map((categories, index) => (
        <Section title={null} category={categories.category} desc={null}>
          {fetchData[index].icons.map((icon: any) => (
            <IconBox
              key={icon.iconId}
              id={icon.iconId}
              title={icon.name}
              svg={icon.element}
              image={icon.image.url}
            />
          ))}
        </Section>
      ))}
    </React.Fragment>
  );
};