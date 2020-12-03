import Icon from "./Icon";

import styles from "./App.module.css";

const Row = ({ children }) => <div className={styles.row}>{children}</div>;
const Spacer = () => <h1>&nbsp;</h1>;

function App() {
  return (
    <div>
      <h1>Base et références externes</h1>
      <Row>
        <Icon type="web" />
        <Icon type="mail" />
        <Icon type="rss" />
        <Icon type="wiki" />
        <Icon type="github" />
        <Icon type="medium" />
      </Row>
      <h1>Diffusion</h1>
      <Row>
        <Icon type="apple" />
        <Icon type="google" />
        <Icon type="spotify" />
        <Icon type="deezer" />
        <Icon type="podcastaddict" />
        <Icon type="podcloud" />
      </Row>
      <Spacer />
      <Row>
        <Icon type="youtube" />
        <Icon type="dailymotion" />
        <Icon type="vimeo" />
        <Icon type="soundcloud" />
      </Row>
      <h1>Communauté</h1>
      <Row>
        <Icon type="twitter" />
        <Icon type="facebook" />
        <Icon type="instagram" />
        <Icon type="discord" />
        <Icon type="twitch" />
      </Row>
      <Spacer />
      <Row>
        <Icon type="snapchat" />
        <Icon type="linkedin" />
        <Icon type="reddit" />

        <Icon type="whatsapp" />
        <Icon type="tiktok" />
      </Row>
      <h1>Financement</h1>
      <Row>
        <Icon type="shop" />
        <Icon type="amazon" />
        <Icon type="tipeee" />
        <Icon type="patreon" />
        <Icon type="paypal" />
        <Icon type="tip" />
        <Icon type="onlyfan" />
      </Row>
      <h1>Autres</h1>
      <Row>
        <Icon type="link" />
        <Icon type="info" />
      </Row>
    </div>
  );
}

export default App;
