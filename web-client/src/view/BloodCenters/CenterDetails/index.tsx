/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IBloodDonationCenter } from 'interfaces/bloodDonationCenters';
import { Card, LocationIcon, Badge } from './../styled';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import FlexBox from 'components/StyledComponents/FlexBox';
import Spinner from 'components/Spinner';
import Text from 'components/StyledComponents/Text';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PublicIcon from '@mui/icons-material/Public';
import Link from 'components/StyledComponents/Link';
import { CopyIcon } from 'components/Icons';
import { Wrapper as GoogleMapWrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMap from './GoogleMap';
import { useBloodCentersStore } from 'store/useBloodCenters';
import { useBloodCenterStore} from 'store/useBloodCenter';
import { FormattedMessage } from 'react-intl';

interface ICopied {
    address: boolean;
    cellPhone: boolean;
    landlinePhone: boolean;
    email: boolean;
}

const CenterDetails: React.FC = () => {
    const { bloodCenters } = useBloodCentersStore();
    const { bloodCenter, setBloodCenter } = useBloodCenterStore();

    // console.log(bloodCenter, 'bloodCenter in Detail')
    const { id } = useParams();
    const navigate = useNavigate();
    const [centerObj, setCenterObj] = useState<IBloodDonationCenter | null>();
    const [isCopied, setIsCopied] = useState<ICopied>({
        address: false,
        cellPhone: false,
        landlinePhone: false,
        email: false
    });
    const [isLoading, setIsLoading] = useState(true);
    useEffect(
        () => {
            const center: IBloodDonationCenter | null = bloodCenters.find(center => center.id === id) || null;
            if (center) {
                setCenterObj(center);
                setBloodCenter(center);
                setIsLoading(false);
            } else {
                setCenterObj(bloodCenter);
                setIsLoading(false);
            }
        }, [id]
    )

    const handleCopy = (key: string) => {
        setIsCopied((prevState: ICopied) => {
            const updatedState = {} as ICopied;

            for (const k in prevState) {
                if (Object.prototype.hasOwnProperty.call(prevState, k)) {
                    updatedState[k as keyof ICopied] = k === key;
                }
            }

            return updatedState;
        });
    };

    if (isLoading) {
        return <Spinner />
    }
    const render = (status: Status) => {
        switch (status) {
            case Status.LOADING:
                return <Spinner />;
            case Status.FAILURE:
                return <div>Error</div>;
            case Status.SUCCESS:
                return <GoogleMap center={{ lat: Number(centerObj?.address?.latitude), lng: Number(centerObj?.address?.longitude) }} zoom={18} />;
        }
    };
    // console.log(centerObj, import.meta.env, 'centerObj')
    return (
        <FlexBox direction="column" deskWidth="600px">
            <FlexBox margin="16px 0 0 0">
                <Breadcrumbs aria-label="breadcrumb">
                    <Text color="var(--main-text-color)" textDecoration="underline"
                        hoverColor="var(--grey-hover)"
                        cursor="pointer"
                        onClick={() => navigate('/')}>
                        <FormattedMessage id="home" />
                    </Text>
                    <Text color="var(--violet-color)">
                        <FormattedMessage id="bloodCenter" />
                    </Text>
                </Breadcrumbs>
            </FlexBox>
            <FlexBox margin="16px 0 0 0">
                <Text color="var(--header-text-color)" fontSize="20px" fontWeight="600">{centerObj?.name}</Text>
            </FlexBox>
            <Card direction="column">
                <FlexBox align="center" margin="0 0 16px 0">
                    <LocationIcon />
                    <FlexBox direction="column" margin="0 0 0 16px">
                        <Text color="var(--header-text-color)">{centerObj?.address?.street}, {centerObj?.address?.city}</Text>
                        <Text color="var(--header-text-color)">{centerObj?.address?.postalCode}, {centerObj?.address?.region}</Text>
                    </FlexBox>
                    <CopyIcon
                        isCopied={isCopied.address}
                        clickHandler={() => handleCopy("address")}
                        text={[centerObj?.address?.street, centerObj?.address?.city, centerObj?.address?.postalCode, centerObj?.address?.region].join(',')}
                    />
                </FlexBox>

                <GoogleMapWrapper apiKey={import.meta.env.VITE_GOOGLE_MAP_KEY} render={render} />

                <FlexBox direction="column" margin="16px 0 0 0">
                    <FlexBox justify="space-between" align="center">
                        <Text margin="16px 0" fontWeight="500">
                            <FormattedMessage id="workHours" />
                        </Text>
                        {centerObj?.category && <Badge>{centerObj?.category}</Badge>}
                    </FlexBox>
                    {centerObj?.workSchedule?.map((item, index) =>
                        <FlexBox key={index}>
                            <Text width="50px">{item.weekDay.ShortName}</Text>
                            <FlexBox margin="0 0 0 16px">
                                <Text>{item.startTimeBeforeLunchBreak}</Text>
                                <span style={{ margin: '0 5px' }}> - </span>
                                <Text> {item.endTimeAfterLunchBreak}</Text>
                            </FlexBox>
                        </FlexBox>)
                    }
                </FlexBox >
                <FlexBox direction="column" margin="16px 0 0 0">
                    {centerObj?.contacts.cellPhone && <FlexBox>
                        <PhoneIcon style={{ fontSize: '20px', cursor: 'poiner' }} />
                        <Text margin="0 8px" fontWeight="500">{centerObj?.contacts.cellPhone}</Text>
                        <CopyIcon
                            isCopied={isCopied.cellPhone}
                            text={centerObj?.contacts.cellPhone}
                            clickHandler={() => handleCopy('cellPhone')}
                        />
                    </FlexBox>}
                    {centerObj?.contacts.landlinePhone && <FlexBox>
                        <PhoneIcon style={{ fontSize: '20px', cursor: 'poiner' }} />
                        <Text margin="0 8px" fontWeight="500">{centerObj?.contacts.landlinePhone}</Text>
                        <CopyIcon
                            isCopied={isCopied.landlinePhone}
                            text={centerObj?.contacts.landlinePhone}
                            clickHandler={() => handleCopy('landlinePhone')}
                        />
                    </FlexBox>}
                    {centerObj?.contacts.email && <FlexBox margin="4px 0">
                        <AlternateEmailIcon style={{ fontSize: '20px', cursor: 'poiner' }} />
                        <Text margin="0 8px" fontWeight="500">{centerObj?.contacts.email}</Text>
                        <CopyIcon
                            isCopied={isCopied.email}
                            text={centerObj?.contacts.email}
                            clickHandler={() => handleCopy('email')}
                        />
                    </FlexBox>}
                    {centerObj?.contacts.website && <FlexBox>
                        <Link href={centerObj?.contacts.website} target="_blank" rel="noopener noreferrer"
                            hoverColor="var(--grey-hover)"
                        >
                            <PublicIcon style={{ fontSize: '20px', cursor: 'poiner', marginRight: '8px' }} />
                            <span>{centerObj?.contacts.website}</span>
                        </Link>
                    </FlexBox>}
                    {centerObj?.notes && <FlexBox margin="4px 0">
                        <Text fontWeight="500">
                            <FormattedMessage id="info" />: {centerObj?.notes}
                        </Text>
                    </FlexBox>}
                </FlexBox>
            </Card >
        </FlexBox >
    )
}

export default CenterDetails;