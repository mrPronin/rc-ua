import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IBloodDonationCenter } from 'interfaces/bloodDonationCenters';
import { Card, LocationIcon } from './../styled';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import FlexBox from 'components/StyledComponents/FlexBox';
import Text from 'components/StyledComponents/Text';
import bloodCentersStore from 'store/bloodCenters';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CenterDetails: React.FC = () => {
    const { bloodCenters } = bloodCentersStore;
    const { id } = useParams();
    const [centerObj, setCenterObj] = useState<IBloodDonationCenter>();

    useEffect(
        () => {
            setCenterObj(bloodCenters.find(center => center.id === id));
        }, []
    )

    console.log(centerObj, 'centerObj')
    return (
        <FlexBox direction="column" deskWidth="600px">
            <FlexBox margin="16px 0 0 0">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">
                        <Text color="var(--dark-grey)">
                            Home
                        </Text>
                    </Link>
                    <Text color="var(--violet-color)">
                        Blood center
                    </Text>
                </Breadcrumbs>
            </FlexBox>
            {/* <FlexBox margin="16px 0 0 0" backgroundColor='var(--white-color)' borderRadius="10px" padding="16px"> */}
            <Card direction="column">
                <FlexBox align="center">
                    <LocationIcon />
                    <FlexBox direction="column" margin="0 0 0 16px">
                        <Text fontSize="14px">{centerObj?.address.street}, {centerObj?.address.city}</Text>
                        <Text fontSize="14px">{centerObj?.address.postalCode}, {centerObj?.address.region}</Text>
                    </FlexBox>
                    <ContentCopyIcon />
                </FlexBox>
                <FlexBox direction="column">
                    <Text margin="16px 0">Work hours</Text>
                    {centerObj?.workSchedule.map(item =>
                        <FlexBox>
                            <Text width="50px">{item.weekDay.ShortName}</Text>
                            <FlexBox margin="0 0 0 16px">
                                <Text>{item.startTimeBeforeLunchBreak}</Text>
                                <span style={{margin: '0 5px'}}> - </span>
                                <Text> {item.endTimeAfterLunchBreak}</Text>
                            </FlexBox>
                        </FlexBox>)}
                </FlexBox>
            </Card>
        </FlexBox >
    )
}

export default CenterDetails;