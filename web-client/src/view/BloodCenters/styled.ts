import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ICardProps {
  direction?: string;
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
  cursor: pointer;
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
  background-color: var(--main-background-color);
  padding: 6px 12px;
  border-radius 5px;
  font-size: 12px;
`

export { CardContainer, Card, LocationIcon, Badge } ;
