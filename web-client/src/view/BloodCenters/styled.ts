import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ICardProps {
  direction?: string;
  cursor?: string;
}
const Card = styled.div<ICardProps>`
  display: flex;
  justify-content:space-between;
  align-items: center;
  flex-direction: ${({direction}) => direction ? direction : null};
  background-color: var(--white-color);
  margin-top: 16px;
  padding: 16px;
  border-radius: 10px;
  cursor: ${({cursor}) => cursor ? cursor : "default"};
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > ${Card}:last-child {
    margin-bottom: 16px;
  }
`
const LocationIcon = styled(LocationOnIcon)`
  color: var(--main-red-color)
`
const Badge = styled.div`
  font-family:'Manrope';
  background-color: var(--main-background-color);
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  height: fit-content;
  text-transform: lowercase;
  
  &:first-letter {
    text-transform: uppercase;
  }
`

export { CardContainer, Card, LocationIcon, Badge } ;
