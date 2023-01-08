import type { GetServerSideProps } from "next";
import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager,
} from "@chakra-ui/react";

//Interface 
interface Props {
    cookies: string;
    children: React.ReactNode
}

export const Chakra = ({ cookies, children }: Props) => {
    const colorModeManager =
        typeof cookies === 'string'
            ? cookieStorageManagerSSR(cookies)
            : localStorageManager
    return (
        <ChakraProvider colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    return {
        props: {
            cookies: req.headers.cookie ?? ''
        }
    }
}