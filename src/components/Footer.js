import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Construct Point. All Rights Reserved.</p>
    </footer>
  );
};

const styles = {
  footer: { textAlign: "center", padding: "10px", background: "#222", color: "#fff", position: "absolute", bottom: "0", width: "100%" }
};

export default Footer;
