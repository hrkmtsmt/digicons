import { Helmet } from "react-helmet";

export const Head = () => {
  return (
    <Helmet>
      <title>React App</title>
      <meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
      <meta
        name={"description"}
        content={"Web site created using create-react-app"}
      />
    </Helmet>
  );
};
