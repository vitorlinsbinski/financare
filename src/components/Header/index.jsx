import * as S from "./styles";
import {
  SquaresFour,
  ArrowsDownUp,
  PresentationChart,
  SignOut,
} from "phosphor-react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <S.Header>
      <div className="left">
        <h1>Financare</h1>

        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <SquaresFour size={24} weight="duotone" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/transactions">
                <ArrowsDownUp size={24} weight="duotone" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/charts">
                <PresentationChart size={24} weight="duotone" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </S.Header>
  );
}
