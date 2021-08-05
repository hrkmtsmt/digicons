import React, { useState, useEffect } from "react";
import { Section } from "./section";
import { IconBox } from "./icon-box";
import axios from "axios";
export const Loop = () => {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    const headers = { "X-API-KEY": process.env.REACT_APP_API_KEY };
    const endpoint = `${process.env.REACT_APP_ENDPOINT}icons`;
    axios.get(endpoint, { headers: headers }).then((res) => {
      setIcons(res.data.contents);
    });
  }, []);
  return (
    <React.Fragment>
      {icons.map((category, index) => (
        <Section title={null} category={category.category} desc={null}>
          {icons[index].icons.map((icon) => (
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
