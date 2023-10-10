/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IBloodDonationCenter } from 'interfaces/bloodDonationCenters';
import { Card, LocationIcon } from './../styled';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import FlexBox from 'components/StyledComponents/FlexBox';
import Text from 'components/StyledComponents/Text';
import bloodCentersStore from 'store/bloodCenters';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
import PhoneIcon from '@mui/icons-material/Phone';
// import MailIcon from '@mui/icons-material/Mail';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PublicIcon from '@mui/icons-material/Public';
// import Link from '@mui/material/Link';
import Link from 'components/StyledComponents/Link';
import { CopyIcon } from 'components/Icons';
const CenterDetails: React.FC = () => {
    const { bloodCenters, bloodCenter } = bloodCentersStore;
    console.log(bloodCenter, 'bloodCenter in Detail')
    const { id } = useParams();
    const navigate = useNavigate();
    const [centerObj, setCenterObj] = useState<IBloodDonationCenter | null>();

    useEffect(
        () => {
            const center: IBloodDonationCenter | null = bloodCenters.find(center => center.id === id) || null;
            // console.log(center, 'center')
            center ? setCenterObj(center) : setCenterObj(bloodCenter);
            center && bloodCentersStore.setBloodCenter(center);
        }, [id]
    )

    console.log(centerObj, 'centerObj')
    return (
        <FlexBox direction="column" deskWidth="600px" height="100vh">
            <FlexBox margin="16px 0 0 0">
                <Breadcrumbs aria-label="breadcrumb">
                    <Text color="var(--main-text-color)" textDecoration="underline"
                        hoverColor="var(--grey-hover)"
                        cursor="pointer"
                        onClick={() => navigate('/')}>
                        Home
                    </Text>
                    <Text color="var(--violet-color)">
                        Blood center
                    </Text>
                </Breadcrumbs>
            </FlexBox>
            <FlexBox margin="16px 0 0 0">
                <Text color="var(--header-text-color)" fontSize="20px" fontWeight="600">{centerObj?.name}</Text>
            </FlexBox>
            <Card direction="column">
                <FlexBox align="center">
                    <LocationIcon />
                    <FlexBox direction="column" margin="0 0 0 16px">
                        <Text fontSize="16px" color="var(--header-text-color)">{centerObj?.address?.street}, {centerObj?.address?.city}</Text>
                        <Text fontSize="16px" color="var(--header-text-color)">{centerObj?.address?.postalCode}, {centerObj?.address?.region}</Text>
                    </FlexBox>
                    <CopyIcon/>
                </FlexBox>
                <FlexBox direction="column">
                    <Text margin="16px 0" fontWeight="500">Work hours</Text>
                    {centerObj?.workSchedule?.map((item, index) =>
                        <FlexBox key={index}>
                            <Text width="50px">{item.weekDay.ShortName}</Text>
                            <FlexBox margin="0 0 0 16px">
                                <Text>{item.startTimeBeforeLunchBreak}</Text>
                                <span style={{ margin: '0 5px' }}> - </span>
                                <Text> {item.endTimeAfterLunchBreak}</Text>
                            </FlexBox>
                        </FlexBox>)}
                </FlexBox>
                <FlexBox direction="column" margin="16px 0 0 0">
                    {centerObj?.contacts.cellPhone && <FlexBox>
                        <PhoneIcon style={{fontSize: '20px', cursor: 'poiner'}}/>
                        <Text margin="0 8px" fontWeight="500">{centerObj?.contacts.cellPhone}</Text>
                        <CopyIcon />
                    </FlexBox>}
                    {centerObj?.contacts.landlinePhone && <FlexBox>
                        <PhoneIcon style={{fontSize: '20px', cursor: 'poiner'}}/>
                        <Text margin="0 8px" fontWeight="500">{centerObj?.contacts.landlinePhone}</Text>
                        <CopyIcon />
                    </FlexBox>}
                    {centerObj?.contacts.email && <FlexBox margin="4px 0">
                        <AlternateEmailIcon style={{fontSize: '20px', cursor: 'poiner'}}/>
                        <Text margin="0 8px" fontWeight="500">{centerObj?.contacts.email}</Text>
                        <CopyIcon />
                    </FlexBox>}
                    {centerObj?.contacts.website && <FlexBox>
                        <Link href={centerObj?.contacts.website} target="_blank" rel="noopener noreferrer"
                            hoverColor="var(--grey-hover)"
                        >
                            <PublicIcon style={{fontSize: '20px', cursor: 'poiner', marginRight: '8px'}}/>
                            <span>{centerObj?.contacts.website}</span>
                        </Link>
                    </FlexBox>}
                </FlexBox>
            </Card>
        </FlexBox >
    )
}

export default CenterDetails;