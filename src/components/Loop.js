import React, { useState, useEffect } from "react";
import axios from "axios";
import { Section } from "./section";
import { IconBox } from "./icon-box";

export const Loop = () => {
    const [icons, setIcons] = useState([]);
    useEffect(() => {
        const headers = { "X-API-KEY": process.env.REACT_APP_API_KEY };
        const endpoint = `${process.env.REACT_APP_ENDPOINT}icons-data`;
        axios.get(endpoint, { headers: headers }).then((res) => {
            setIcons(res.data.contents);
        });
    }, []);
    return (
        <Section title={""} desc={""}>
            {icons.map((icon) => (
                <IconBox
                    key={icon.id}
                    id={icon.id}
                    title={icon.name}
                    svg={icon.svg}
                    image={icon.image.url}
                />
            ))}
        </Section>
    );
};
