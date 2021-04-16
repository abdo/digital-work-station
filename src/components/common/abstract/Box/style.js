import { devices } from 'style/constants';
import styled from 'styled-components';

const BoxStyled = styled.div`
  display: ${({ display, $span, hidden }) =>
    hidden ? 'none' : display || ($span && 'inline-block')};
  background-color: ${({ bgc }) => bgc};
  background-image: ${({ bgi }) => bgi};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: ${({ pointer }) => pointer && 'pointer'};
  border: ${({ b }) => b};
  border-bottom: ${({ bb }) => bb};
  border-top: ${({ bt }) => bt};
  border-right: ${({ br }) => br};
  border-left: ${({ bl }) => bl};
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  max-width: ${({ maxW }) => maxW};
  min-width: ${({ minW }) => minW};
  max-height: ${({ maxH }) => maxH};
  min-height: ${({ minH }) => minH};
  user-select: ${({ userSelect }) => userSelect};
  flex: ${({ flex }) => flex};
  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  transform: ${({ transform }) => transform};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  box-shadow: ${({ boxShadow }) => boxShadow};
  z-index: ${({ zIndex }) => zIndex};
  opacity: ${({ opacity }) => opacity};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-grow: ${({ flexGrow }) => flexGrow};

  grid-auto-flow: ${({ gridAutoFlow }) => gridAutoFlow};
  column-gap: ${({ columnGap }) => columnGap};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};

  @media ${devices.desktop} {
    width: ${({ w, wd }) => wd || w};
    height: ${({ h, hd }) => hd || h};
    margin: ${({ m, md }) => md || m};
    padding: ${({ p, pd }) => pd || p};
    flex-direction: ${({ flexDirectionD, flexDirection }) =>
      flexDirectionD || flexDirection};
    justify-content: ${({ justifyContentD, justifyContent }) =>
      justifyContentD || justifyContent};
    align-items: ${({ alignItemsD, alignItems }) => alignItemsD || alignItems};
    display: ${({ displayD, display, hidden }) =>
      hidden ? 'none' : displayD || display};
  }
  @media ${devices.laptop} {
    width: ${({ w, wl, wd }) => wl || wd || w};
    height: ${({ h, hl, hd }) => hl || hd || h};
    margin: ${({ m, ml, md }) => ml || md || m};
    padding: ${({ p, pl, pd }) => pl || pd || p};
    flex-direction: ${({ flexDirectionL, flexDirectionD, flexDirection }) =>
      flexDirectionL || flexDirectionD || flexDirection};
    justify-content: ${({ justifyContentL, justifyContentD, justifyContent }) =>
      justifyContentL || justifyContentD || justifyContent};
    align-items: ${({ alignItemsL, alignItemsD, alignItems }) =>
      alignItemsL || alignItemsD || alignItems};
    display: ${({ displayL, displayD, display, hidden }) =>
      hidden ? 'none' : displayL || displayD || display};
  }
  @media ${devices.miniLaptop} {
    width: ${({ w, wml, wl, wd }) => wml || wl || wd || w};
    height: ${({ h, hml, hl, hd }) => hml || hl || hd || h};
    margin: ${({ m, mml, ml, md }) => mml || ml || md || m};
    padding: ${({ p, pml, pl, pd }) => pml || pl || pd || p};
    flex-direction: ${({
      flexDirectionML,
      flexDirectionL,
      flexDirectionD,
      flexDirection,
    }) => flexDirectionML || flexDirectionL || flexDirectionD || flexDirection};
    justify-content: ${({
      justifyContentML,
      justifyContentL,
      justifyContentD,
      justifyContent,
    }) =>
      justifyContentML || justifyContentL || justifyContentD || justifyContent};
    align-items: ${({ alignItemsML, alignItemsL, alignItemsD, alignItems }) =>
      alignItemsML || alignItemsL || alignItemsD || alignItems};
    display: ${({ displayML, displayL, displayD, display, hidden }) =>
      hidden ? 'none' : displayML || displayL || displayD || display};
  }
  @media ${devices.tablet} {
    width: ${({ w, wt, wml, wl, wd }) => wt || wml || wl || wd || w};
    height: ${({ h, ht, hml, hl, hd }) => ht || hml || hl || hd || h};
    margin: ${({ m, mt, mml, ml, md }) => mt || mml || ml || md || m};
    padding: ${({ p, pt, pml, pl, pd }) => pt || pml || pl || pd || p};
    flex-direction: ${({
      flexDirectionT,
      flexDirectionML,
      flexDirectionL,
      flexDirectionD,
      flexDirection,
    }) =>
      flexDirectionT ||
      flexDirectionML ||
      flexDirectionL ||
      flexDirectionD ||
      flexDirection};
    justify-content: ${({
      justifyContentT,
      justifyContentML,
      justifyContentL,
      justifyContentD,
      justifyContent,
    }) =>
      justifyContentT ||
      justifyContentML ||
      justifyContentL ||
      justifyContentD ||
      justifyContent};
    align-items: ${({
      alignItemsT,
      alignItemsML,
      alignItemsL,
      alignItemsD,
      alignItems,
    }) =>
      alignItemsT || alignItemsML || alignItemsL || alignItemsD || alignItems};
    display: ${({ displayT, displayML, displayL, displayD, display, hidden }) =>
      hidden
        ? 'none'
        : displayT || displayML || displayL || displayD || display};
  }
  @media ${devices.mobile} {
    width: ${({ w, wm, wml, wt, wl, wd }) => wm || wt || wml || wl || wd || w};
    height: ${({ h, hm, hml, ht, hl, hd }) => hm || ht || hml || hl || hd || h};
    margin: ${({ m, mm, mt, mml, ml, md }) => mm || mt || mml || ml || md || m};
    padding: ${({ p, pm, pt, pml, pl, pd }) =>
      pm || pt || pml || pl || pd || p};
    flex-direction: ${({
      flexDirectionM,
      flexDirectionT,
      flexDirectionML,
      flexDirectionL,
      flexDirectionD,
      flexDirection,
    }) =>
      flexDirectionM ||
      flexDirectionT ||
      flexDirectionML ||
      flexDirectionL ||
      flexDirectionD ||
      flexDirection};
    justify-content: ${({
      justifyContentM,
      justifyContentT,
      justifyContentML,
      justifyContentL,
      justifyContentD,
      justifyContent,
    }) =>
      justifyContentM ||
      justifyContentT ||
      justifyContentML ||
      justifyContentL ||
      justifyContentD ||
      justifyContent};
    align-items: ${({
      alignItemsM,
      alignItemsT,
      alignItemsML,
      alignItemsL,
      alignItemsD,
      alignItems,
    }) =>
      alignItemsM ||
      alignItemsT ||
      alignItemsML ||
      alignItemsL ||
      alignItemsD ||
      alignItems};
    display: ${({
      displayM,
      displayT,
      displayML,
      displayL,
      displayD,
      display,
      hidden,
    }) =>
      hidden
        ? 'none'
        : displayM || displayT || displayML || displayL || displayD || display};
  }
`;

BoxStyled.defaultProps = {
  m: 0,
  md: null,
  ml: null,
  mt: null,
  mm: null,
  p: null,
  pd: null,
  pl: null,
  pt: null,
  pm: null,
  hidden: false,
};

export default BoxStyled;
