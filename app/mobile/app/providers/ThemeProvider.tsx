import { createContext, ReactNode, useContext } from 'react';
import { Text, TextProps } from 'react-native';


const InterText = (props: TextProps) => (
  <Text {...props} style={[{ fontFamily: 'Inter' }, props.style]} />
);

const InterBold = (props: TextProps) => (
  <Text {...props} style={[{ fontFamily: 'Inter-Bold' }, props.style]} />
);

const InterMedium = (props: TextProps) => (
  <Text {...props} style={[{ fontFamily: 'Inter-Medium' }, props.style]} />
);

interface ThemeContextType {
  Text: React.ComponentType<TextProps>;
  TextBold: React.ComponentType<TextProps>;
  TextMedium: React.ComponentType<TextProps>;
}

const ThemeContext = createContext<ThemeContextType>({
  Text: InterText,
  TextBold: InterBold,
  TextMedium: InterMedium,
});

export const useTheme = () => useContext(ThemeContext);


export default function ThemeProvider({ children }: { children: ReactNode}) {
  const value = {
    Text: InterText,
    TextBold: InterBold,
    TextMedium: InterMedium,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};