import React from "react";
import { Section } from "./section";
import { IconBox } from "./icon-box";
import Icons from "../image/icons.json";

export const Loop = () => {
  const category = Icons.icons[0].id;
  return (
    <Section title={category} desc={""}>
      {Icons.icons[0].icon.map((icon) => (
        <IconBox
          key={icon.id}
          id={icon.id}
          title={icon.name}
          svg={icon.element}
          image={`src/image/${category}/${icon.id}.svg`}
        />
      ))}
    </Section>
  );
};
