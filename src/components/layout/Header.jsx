import * as React from "react";
import { navigate } from "gatsby";
import { css, StyleSheet } from "aphrodite";

import Text from "../base/Text";
import HamburgerMenu from "../base/HamburgerMenu";

export default function Header({ menuActive, onMenuClick }) {
  return (
    <>
      <div className={css(styles.logo)} onClick={() => navigate("/")}>
        <Text scale="title" weight="bold">
          Francistogram.
        </Text>
      </div>
      <HamburgerMenu active={menuActive} onClick={onMenuClick} />
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: "fixed",
    left: "min(30px, 7.5vw)",
    top: 24,
    cursor: "pointer",
  },
});
