import "../styles/home.css";
import Table from "../components/Table/Table";
import { ThemeProvider } from "../components/theme/Theme";

const Home: React.FC = () => {
  return (
    <ThemeProvider>
      <div id="home">
        <Table />
      </div>
    </ThemeProvider>
  );
};

export default Home;
