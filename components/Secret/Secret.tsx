import React from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import SecretNormal from "./SecretNormal";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const Secret = ({ theme, projectsTheme }: Props) => {
  return (
    <div className="SECRET TOP-COMP">
      <SecretNormal />
    </div>
  );
};

export default Secret;
