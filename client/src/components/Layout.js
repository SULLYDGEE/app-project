// src/components/Layout.js
import React from "react";
import { Link } from "react-router-dom";
import { Layout as AntLayout, Menu } from "antd"; // Renommé pour éviter le conflit

const { Header, Content, Footer } = AntLayout; // Utilise AntLayout pour extraire Header, Content, Footer

const contentStyle = {
  display: "flex",
  flexWrap: "wrap",
  padding: "3rem 3rem",
  justifyContent: "center",
};

const Layout = ({ children }) => {
  return (
    <AntLayout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Accueil</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/rooms">Chambre</Link> {/* Modifié ici */}
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about">À Propos</Link> {/* Modifié ici */}
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/contact">Contact</Link>{" "}
            {/* Assurez-vous que ce chemin est correct */}
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        SLM Villa Of Happiness ©2024 Créé Par SOLIMON Gerson
      </Footer>
    </AntLayout>
  );
};

export default Layout;
