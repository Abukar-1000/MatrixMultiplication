import { ArrayContextProvider } from "./Contexts/ArrayContext";
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from "./Theme/darkTheme"



export default function Providers({ children }) {

    return (
        <ThemeProvider theme={darkTheme}>
            <ArrayContextProvider>
                {children}
            </ArrayContextProvider>
        </ThemeProvider>
    );
}