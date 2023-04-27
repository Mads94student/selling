import Header from "./components/header";
import ImgContent from "./components/imgcontent";
import MidImages from "./components/midimages";
import OurFavorites from "./components/ourfavorites";
import styles from './styles/app.module.css'

function App() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
        <ImgContent />
        <OurFavorites />
        <MidImages />
      </div>
    </div>
  );
}

export default App;
