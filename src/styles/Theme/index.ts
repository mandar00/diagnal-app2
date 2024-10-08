/* 
    making theme as a static variable for now 
    can be converted to theme provider context if we plan to implement dynamic themeing
*/
export const Theme = {
    borderRadius: 4,
    colors: {
      text: {
        label: '#879399',
        help: '#737373',
      },
      primary:{
        light:"#FFFFFF",
        dark:"#171717"
      }
    },
    typography: {
      fonts:{
        TitilliumWeb: `'Titillium Web', sans-serif `
      },
      weights: {
        light: 200,
        normal: 400,
        medium: 500,
        bold: 600,
      },
      sizes: {
        xxs: 9,
        xs: 10,
        s: 12,
        m: 14,
        l: 16,
        xl: 21,
        xxl: 28,
        xxxl: 36,
      },
    },
}