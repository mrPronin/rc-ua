import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IBloodDonationCenterConnection,
  /*IPageInfo,*/ IBloodDonationCenterEdge,
  IBloodDonationCenter,
} from "interfaces/bloodDonationCenters";
// import Pagination from '@mui/material/Pagination';
import Button from "components/Button";
import Box from "@mui/material/Box";
import FlexBox from "components/StyledComponents/FlexBox";
import Text from "components/StyledComponents/Text";
import { useQuery } from "@apollo/client";
import { GET_BLOOD_CENTERS } from "API/bloodDonationCenters";
import CircularProgress from "@mui/material/CircularProgress";
// import { bloodCentersData } from 'assets/data';
import InfiniteScroll from "react-infinite-scroll-component";
import SearchInput from "components/SearchInput";
// import IconButton from '@mui/material/IconButton';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import PaginationContainer from 'components/StyledComponents/PaginationContainer';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import FilterListIcon from "@mui/icons-material/FilterList";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import DialogContent from "@mui/material/DialogContent";
// import IconButton from '@mui/material/IconButton';
import CloseIcon from "@mui/icons-material/Close";
import Slide, { SlideProps } from "@mui/material/Slide";
import { CardContainer, Card, LocationIcon, Badge } from "./styled";
import { useBloodCentersStore } from "store/useBloodCenters";
// import  {useSettingsStore}  from 'store/useSettings';
import { FormattedMessage } from "react-intl";
import useWindowSize from "hooks/useMobileSize";
import useModal from "hooks/useModal";

const Transition = React.forwardRef<HTMLDivElement, SlideProps>(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);
const CustomDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    width: "100%",
    height: "250px",
    borderRadius: "16px 16px 0 0",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    position: "fixed",
    bottom: 0,
    left: 0,
    margin: 0,
    maxWidth: "none",
    boxShadow: "none",
  },
  "& .MuiBackdrop-root": {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
}));

const BloodCenters: React.FC = () => {
  const isMobile = useWindowSize();
  const [show, handleOpen, handleClose] = useModal();
  const { setBloodCentersStore } = useBloodCentersStore();
  // const { data: mockData } = bloodCentersData;
  const navigate = useNavigate();
  const [endCursor, setEndCursor] = useState("");
  const [hasNextPage, setHasNextPage] = useState(true);
  // const { loading, error, data, fetchMore } = useQuery(GET_BLOOD_CENTERS, { variables: { first: 6 } });
  const { loading, error, data, fetchMore } = useQuery(GET_BLOOD_CENTERS, {
    variables: {
      first: 6,
    },
    fetchPolicy: "cache-and-network",
  });
  // const [pageInfo, setPageInfo] = useState<IPageInfo>();
  const [bloodCenters, setBloodCenters] = useState<IBloodDonationCenter[]>([]);
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (data) {
      initData(data);
    }
  }, [data]);

  const fetchMoreData = () => {
    if (hasNextPage) {
      fetchMore({
        variables: {
          after: endCursor,
          first: 4,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          initData(fetchMoreResult);
        },
      });
    }
  };

  const initData = (data: IBloodDonationCenterConnection) => {
    // setPageInfo({ ...data?.bloodDonationCenters?.pageInfo });
    const { hasNextPage: hasDataNextPage, endCursor: endDataCursor } =
      data?.bloodDonationCenters?.pageInfo;
    console.log(data, hasDataNextPage, "data in InitData-.hasNextPage");
    setHasNextPage(hasDataNextPage);
    setEndCursor(endDataCursor);

    const newEdges = data?.bloodDonationCenters?.edges;

    const newBloodDonationCenters = newEdges?.map(
      (obj: IBloodDonationCenterEdge) => {
        const { node } = obj;
        return { ...node };
      }
    );
    setBloodCenters([...bloodCenters, ...newBloodDonationCenters]);
    setBloodCentersStore([...bloodCenters, ...newBloodDonationCenters]);
  };
  // const loadNext = async () => {
  //   if (!pageInfo?.hasNextPage) return;

  //   const after = pageInfo?.endCursor;
  //   const first = 5;

  //   try {
  //     const { data } = await fetchMore({
  //       variables: { first, after },
  //       updateQuery: (prev, { fetchMoreResult }) => {
  //         if (!fetchMoreResult) return prev;
  //         return fetchMoreResult
  //       },
  //     });
  //     initData(data);
  //     setCurrentPage(currentPage + 1)
  //   } catch (error) {
  //     console.error('Error while fetching more data:', error);
  //   }
  // };

  // const loadPrevious = async () => {
  //   if (!pageInfo?.hasPreviousPage) return;

  //   const before = pageInfo?.startCursor;
  //   const last = 5;
  //   try {
  //     const { data } = await fetchMore({
  //       variables: { first: undefined, last, before },
  //       updateQuery: (prev, { fetchMoreResult }) => {
  //         if (!fetchMoreResult) return prev;
  //         return fetchMoreResult;
  //       },
  //     });
  //     initData(data);
  //     setCurrentPage(currentPage - 1)
  //   } catch (error) {
  //     console.error('Error while fetching more data:', error);
  //   }
  // };

  // if (loading)
  //   return (
  //     <FlexBox margin="25px 0" justify="center">
  //       <CircularProgress />
  //     </FlexBox>
  //   );

  if (error) return <p>Error : {error.message}</p>;
  // console.log(bloodCenters, 'edges-bloodCenters')
  return (
    <>
      <FlexBox direction="column" deskWidth="600px">
        <Box display="flex" sx={{ padding: 0, marginBottom: "16px" }}>
          <SearchInput />
          {isMobile && (
            <Button clickHandler={handleOpen}>
              <FilterListIcon style={{ color: "#ff5050", fontSize: "32px" }} />
            </Button>
          )}
        </Box>
        <Text fontSize="24px" fontWeight="600">
          <FormattedMessage id="bloodCentersHeader" />
        </Text>
        <CardContainer>
          <InfiniteScroll
            dataLength={bloodCenters.length}
            next={fetchMoreData}
            hasMore={hasNextPage}
            loader={
              <FlexBox margin="25px 0" justify="center">
                {loading && <CircularProgress />}
              </FlexBox>
            }
            endMessage={<p>No more items</p>}
          >
            {bloodCenters.map((center: IBloodDonationCenter) => (
              <Card
                key={center.id}
                onClick={() => navigate(`center/${center.id}`)}
                cursor="pointer"
              >
                <FlexBox align="center">
                  <LocationIcon />
                  <FlexBox direction="column" margin="0 0 0 16px">
                    <Text
                      color="var(--header-text-color)"
                      fontWeight="600"
                      cursor="pointer"
                    >
                      {center.name}
                    </Text>
                    <Text
                      color="var(--header-text-color)"
                      fontSize="12px"
                      cursor="pointer"
                    >
                      {center?.address?.street}, {center?.address?.city}
                    </Text>
                    <Text
                      color="var(--header-text-color)"
                      fontSize="12px"
                      cursor="pointer"
                    >
                      {center?.address?.postalCode}, {center?.address?.region}
                    </Text>
                  </FlexBox>
                </FlexBox>
                <Badge>{center.category}</Badge>
              </Card>
            ))}
          </InfiniteScroll>
        </CardContainer>
        {/* <FlexBox justify="center" margin="25px 0 0 0">
        <PaginationContainer>
          <IconButton onClick={loadPrevious} disabled={currentPage === 1} style={{ padding: '6px 12px' }}>
            <ArrowBackIcon />Prev
          </IconButton>
          <IconButton onClick={loadNext} disabled={currentPage === 4}>
            Next<ArrowForwardIcon />
          </IconButton>
        </PaginationContainer>
      </FlexBox> */}
      </FlexBox>
      <CustomDialog
        open={show}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <p>Filters modal</p>
            <button
              onClick={handleClose}
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                outline: "none",
              }}
            >
              <CloseIcon />
            </button>
          </div>
        </DialogContent>
      </CustomDialog>
    </>
  );
};

export default BloodCenters;
