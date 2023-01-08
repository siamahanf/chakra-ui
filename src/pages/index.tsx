import type { NextPage } from "next";
import { useColorMode, Button } from "@chakra-ui/react";


const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </div>
  );
};

export default Home;


export { getServerSideProps } from "../Chakra";