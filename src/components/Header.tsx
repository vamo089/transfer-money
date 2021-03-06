import React from "react";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { theme } from "helpers/theme";
import { logout } from "helpers/logout";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { UserInfo } from "services/getUserInfo";
import {useHistory} from "react-router-dom";

const Container = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.secondary};
  padding-top: 20px;
`;

const LeftSide = styled.div`
  display: flex;
  padding-right: 20px;
`;

const RightSide = styled.div`
  display: flex;
  padding-left: 20px;
`;

const NameContainer = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  color: ${theme.colors.tertiary};
  span {
    font-size: 14px;
  }
`;

const Logout = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 20px;
  color: ${theme.colors.tertiary};
  cursor: pointer;
  &:hover {
    color: #000;
  }
  svg {
    font-size: 21px;
  }
`;

export const Header = () => {
  const history = useHistory();
  const userData = useSelector<RootState, Omit<UserInfo, "id" | "email">>(
    (state) => state.account.userData
  );
  const { name, balance } = userData;
  return (
    <Container>
      <RightSide>
        <PersonIcon />
        <NameContainer>
          <div>{name}</div>
          <span>
            PW balance: <b>{balance}</b>
          </span>
        </NameContainer>
      </RightSide>
      <LeftSide>
        <Logout onClick={() => logout(history)}>
          Logout <ExitToAppIcon />
        </Logout>
      </LeftSide>
    </Container>
  );
};
