import { useTheme, Breakpoint } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type QueryType = 'up' | 'down' | 'between' | 'only';

export default function useResponsive(query: QueryType, start: Breakpoint, end?: Breakpoint) {
    const theme = useTheme();

    const createMediaQueryString = (): string => {
        switch (query) {
            case "up":
                return theme.breakpoints.up(start);
            case "down":
                return theme.breakpoints.down(start);
            case "between":
                if (end) {
                    theme.breakpoints.between(start, end);
                }
                throw new Error("For 'between' query, both 'start' and 'end' breakpoints are required.");
            case 'only':
                return theme.breakpoints.only(start);
            default:
                throw new Error('Invalid query type.');
        }
    };

    const mediaQuery = createMediaQueryString();
    const result = useMediaQuery(mediaQuery);
    // TODO: Remove this console log
    console.log("🚀 ~ file: useResponsive.ts:29 ~ useResponsive ~ result:", result);
    return result;
}